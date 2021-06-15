import React from 'react';
import withMyTheme from '../HOC';

import { myStyle } from '../styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DisplayQuestion from '../components/quiz/displayQuestion';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import {
    clearAllQuesSession,
    getAnswerIndexes,
    getCurrentIndexQuestion,
    isEligibleForSubmit,
    saveQuestion,
    setIndexQuestion,
} from '../utils';
import { API_URLS, BTN_NEXT_LABEL, BTN_PREVIOUS_LABEL, BTN_SUBMIT_LABEL, LINK_URL } from '../constants';
import { Redirect } from 'react-router';

import useSnackBar from '../hook';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import CheckIcon from '@material-ui/icons/Check';
import PublishIcon from '@material-ui/icons/Publish';
import LoadingQuest from '../components/quiz/loading';
import { useConfirm } from 'material-ui-confirm';
import LinearProgress from '@material-ui/core/LinearProgress';
import GetReadyQuest from '../components/quiz/ready';

const Quiz: React.FC = () => {
    // Variables
    const classes = myStyle();
    const buttons = [];
    const confirm = useConfirm();
    const { showSnackbar } = useSnackBar();

    const [quesIndexState, setQuestIndexState] = useState(getCurrentIndexQuestion());
    const [isFetching, setIsFetching] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [questionsData, setQuestionsData] = useState([]);
    const [isRedirectToResultPage, setIsRedirectToResultPage] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const isLastQuestion = quesIndexState + 1 === questionsData.length;
    const commonCondition = questionsData.length === 0 || isFetching;
    const isDisablePreviousButton = commonCondition || quesIndexState === 0;
    const isDisableNextButton = commonCondition || isLastQuestion;
    const isDisableSubmitButton = commonCondition;
    const canSubmit = isEligibleForSubmit(questionsData.length);

    // Hooks
    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            await axios(API_URLS.fetchQuestion)
                .then((res) => {
                    setQuestionsData(res.data.result);
                    saveQuestion(res.data.result);
                })
                .catch((error) => {
                    // TODO: Change to use snackBar
                    showSnackbar(`Can't fetch question: ${error}`, 'error');
                })
                .finally(() => {
                    setIsFetching(false);
                });
        };

        fetchData();
    }, []);

    // Functions
    const handleChangeQuestionIndex = (index) => {
        setIndexQuesCombo(index);
    };
    const setIndexQuesCombo = (index) => {
        setIndexQuestion(index);
        setQuestIndexState(index);
    };
    const handleNavButton = (action) => {
        switch (action) {
            case BTN_PREVIOUS_LABEL:
                setIndexQuesCombo(quesIndexState - 1);
                break;
            case BTN_NEXT_LABEL:
                isLastQuestion ? null : setIndexQuesCombo(quesIndexState + 1);
                break;
            case BTN_SUBMIT_LABEL:
                handleSubmit();
                break;
            default:
                break;
        }
    };
    const handleSubmit = () => {
        if (canSubmit) {
            confirm({
                confirmationText: 'Yes',
                cancellationText: 'NO',
                title: 'Are you sure to submit?',
            }).then(() => {
                setIsRedirectToResultPage(true);
            });

            return false;
        } else {
            showSnackbar('Please select the answer to all questions', 'error');
        }
    };
    const changeAnswerValue = () => {
        setRefresh(!refresh);
    };

    // Render
    const quizBoxTitle = questionsData?.length > 0 ? `Question ${quesIndexState + 1} of ${questionsData.length}` : '';
    const renderContent = isFetching ? (
        <LoadingQuest />
    ) : (
        <DisplayQuestion
            title={quizBoxTitle}
            question={questionsData[quesIndexState]?.question}
            choices={questionsData[quesIndexState]?.choices || []}
            id={questionsData[quesIndexState]?.id || null}
            callBackFunc={changeAnswerValue}
        />
    );

    const questIds = questionsData.map((x) => x.id);
    const answerIds = getAnswerIndexes();
    const processBarValue = (answerIds.length / questIds.length) * 100;
    const processBar = <LinearProgress variant="determinate" value={processBarValue} />;

    // Render nav buttons
    for (let index = 0; index < questIds.length; index++) {
        const answered = answerIds.includes(questIds[index].toString());
        buttons.push(
            <Grid key={index} item>
                <Button
                    variant="contained"
                    onClick={() => handleChangeQuestionIndex(index)}
                    color={answered ? 'primary' : 'default'}
                    disabled={isFetching || index === quesIndexState}
                    endIcon={answered ? <CheckIcon /> : null}
                >
                    {index + 1}
                </Button>
            </Grid>,
        );
    }
    buttons.push(
        <Grid key={'button_submit'} item>
            <Button
                variant="contained"
                style={{ backgroundColor: canSubmit ? 'rgb(5 191 102)' : '#1da1f2', color: 'white' }}
                className={classes.buttonNav}
                disabled={isDisableSubmitButton}
                endIcon={<PublishIcon />}
                onClick={() => handleNavButton(BTN_SUBMIT_LABEL)}
            >
                {BTN_SUBMIT_LABEL}
            </Button>
        </Grid>,
    );

    if (isRedirectToResultPage) {
        return <Redirect to={LINK_URL.result} />;
    }
    const handleClickReadyButton = () => {
        const answers = getAnswerIndexes() || [];
        console.log('answers :>> ', answers);
        if (answers.length > 0) {
            confirm({
                confirmationText: 'Yes',
                cancellationText: 'NO',
                title: 'You have an unfinished session, do you want to continue??',
            })
                .then(() => {
                    setIsReady(true);
                })
                .catch(() => {
                    clearAllQuesSession();
                })
                .finally(() => {
                    setIsReady(true);
                });
        } else {
            setIsReady(true);
        }
    };
    if (!isReady) {
        return <GetReadyQuest handleClickReadyButton={handleClickReadyButton} />;
    }
    return (
        <>
            {/* <div className="overral"> */}
            <div className={classes.quizBox}>
                {renderContent}
                <br />
                <br />

                <Grid container spacing={2} className={classes.gridBetween}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.buttonNav}
                        disabled={isDisablePreviousButton}
                        startIcon={<ArrowLeftIcon />}
                        onClick={() => handleNavButton(BTN_PREVIOUS_LABEL)}
                    >
                        {BTN_PREVIOUS_LABEL}
                    </Button>

                    <Button
                        variant="contained"
                        color={'primary'}
                        className={classes.buttonNav}
                        disabled={isDisableNextButton}
                        endIcon={<ArrowRightIcon />}
                        onClick={() => handleNavButton(BTN_NEXT_LABEL)}
                    >
                        {BTN_NEXT_LABEL}
                    </Button>
                </Grid>
                <hr />
                <Grid container spacing={1} className={classes.gridCenter}>
                    {buttons}
                </Grid>
                <br />
                {processBar}
                <br />
                <div style={{ width: '100%', textAlign: 'center' }}></div>
            </div>
            {/* </div> */}
        </>
    );
};

export default withMyTheme(Quiz);
