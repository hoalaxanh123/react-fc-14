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
    clearAnswers,
    getAnswerIndexes,
    getCurrentIndexQuestion,
    isEligibleForSubmit,
    setIndexQuestion,
} from '../utils';
import { API_URLS, BTN_NEXT_LABEL, BTN_PREVIOUS_LABEL, BTN_SUBMIT_LABEL, LINK_URL } from '../constants';
import { Redirect } from 'react-router';

import useSnackBar from '../hook';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import CheckIcon from '@material-ui/icons/Check';
import PublishIcon from '@material-ui/icons/Publish';
const Quiz: React.FC = () => {
    // Variables
    const classes = myStyle();
    const buttons = [];
    const [quesIndexState, setQuestIndexState] = useState(getCurrentIndexQuestion());
    const [isFetching, setIsFetching] = useState(false);
    const [questionsData, setQuestionsData] = useState([]);
    const [isRedirectToResultPage, setIsRedirectToResultPage] = useState(false);
    const { showSnackbar } = useSnackBar();

    const commonCondition = questionsData.length === 0 || isFetching;
    const isDisablePreviousButton = commonCondition || quesIndexState === 0;
    const isDisableNextButton = commonCondition;
    const isDisableSubmitButton = commonCondition;
    const isLastQuestion = quesIndexState + 1 === questionsData.length;

    // Hooks
    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            await axios(API_URLS.fetchQuestion)
                .then((res) => {
                    setQuestionsData(res.data.result);
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
    const handleChangeQuestionIndex = (e) => {
        const text = e.target.innerText;
        if (!text) return;
        const index = Number(text);
        if (index) {
            setIndexQuesCombo(index - 1);
        }
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
        if (isLastQuestion && isEligibleForSubmit(questionsData.length)) {
            const confirmSubmit = confirm('Are you sure to summit?');
            if (confirmSubmit) {
                clearAnswers();
                setIsRedirectToResultPage(true);
            }
        } else {
            showSnackbar('Please select the answer to all questions', 'error');
        }
    };

    // Render
    const quizBoxTitle = questionsData?.length > 0 ? `Question ${quesIndexState + 1} of ${questionsData.length}` : '';
    const renderContent = isFetching ? (
        <h1>Getting questions.....</h1>
    ) : (
        <DisplayQuestion
            title={quizBoxTitle}
            question={questionsData[quesIndexState]?.question}
            choices={questionsData[quesIndexState]?.choices || []}
            id={questionsData[quesIndexState]?.id || null}
        />
    );
    const questIds = questionsData.map((x) => x.id);
    const answerIds = getAnswerIndexes();
    for (let index = 0; index < questIds.length; index++) {
        const answered = answerIds.includes(questIds[index].toString());
        buttons.push(
            <Grid key={index} item>
                <Button
                    variant="contained"
                    onClick={handleChangeQuestionIndex}
                    color={answered ? 'primary' : 'default'}
                    disabled={isFetching || index === quesIndexState}
                    endIcon={answered ? <CheckIcon /> : null}
                >
                    {index + 1}
                </Button>
            </Grid>,
        );
    }
    if (isRedirectToResultPage) {
        return <Redirect to={LINK_URL.result} />;
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
                        color={'secondary'}
                        className={classes.buttonNav}
                        disabled={isDisableSubmitButton}
                        endIcon={<PublishIcon />}
                        onClick={() => handleNavButton(BTN_SUBMIT_LABEL)}
                    >
                        {BTN_SUBMIT_LABEL}
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
                <Grid container spacing={2} className={classes.gridCenter}>
                    {buttons}
                </Grid>
                <hr />
            </div>
            {/* </div> */}
        </>
    );
};

export default withMyTheme(Quiz);
