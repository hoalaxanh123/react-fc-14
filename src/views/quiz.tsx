import React from 'react';
import withMyTheme from '../HOC';

import { myStyle } from '../styles';
import DisplayQuestion from '../components/quiz/displayQuestion';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import {
    clearAnswers,
    getAnswerIndexes,
    getCurrentIndexQuestion,
    isEligibleForSubmit,
    saveQuestion,
    saveReportData,
    setIndexQuestion,
} from '../utils';
import { API_URLS, LINK_URL } from '../constants';
import { Redirect } from 'react-router';

import useSnackBar from '../hook';

import LoadingQuest from '../components/quiz/loading';
import { useConfirm } from 'material-ui-confirm';
import GetReadyQuest from '../components/quiz/ready';
import QuizNavigator from '../components/quiz/navigator';

const Quiz: React.FC = () => {
    // Variables
    const classes = myStyle();
    const confirm = useConfirm();
    const { showSnackbar } = useSnackBar();

    const [questIndexState, setQuestIndexState] = useState(getCurrentIndexQuestion());
    const [isFetching, setIsFetching] = useState(false);
    const [isUserReady, setIsUserReady] = useState(false);
    const [questionsData, setQuestionsData] = useState([]);
    const [isRedirectToResultPage, setIsRedirectToResultPage] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [reloadQuestion, setReloadQuestion] = useState(false);

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
    }, [reloadQuestion]);

    // Functions
    const setIndexQuesCombo = (index) => {
        setIndexQuestion(index);
        setQuestIndexState(index);
    };

    const handleSubmit = () => {
        if (canSubmit) {
            confirm({
                confirmationText: 'Yes',
                cancellationText: 'NO',
                title: 'Are you sure to submit?',
            }).then(() => {
                saveReportData();
                clearAnswers();
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
    const quizBoxTitle = questionsData?.length > 0 ? `Question ${questIndexState + 1} of ${questionsData.length}` : '';
    const handleClickReadyButton = () => {
        const answers = getAnswerIndexes() || [];
        if (answers.length > 0) {
            confirm({
                confirmationText: 'Yes',
                cancellationText: 'NO',
                title: 'You have an unfinished session, do you want to continue??',
            })
                .then(() => {
                    setIsUserReady(true);
                })
                .catch(() => {
                    clearAnswers();
                    setReloadQuestion(!reloadQuestion);
                    setIndexQuesCombo(getCurrentIndexQuestion());
                })
                .finally(() => {
                    setIsUserReady(true);
                });
        } else {
            setIsUserReady(true);
        }
    };

    if (!isUserReady) {
        return <GetReadyQuest handleClickReadyButton={handleClickReadyButton} />;
    }
    if (isFetching) {
        return <LoadingQuest />;
    }
    if (isRedirectToResultPage) {
        return <Redirect to={LINK_URL.result} />;
    }
    return (
        <>
            <div className={classes.quizBox}>
                <DisplayQuestion
                    title={quizBoxTitle}
                    question={questionsData[questIndexState]?.question}
                    choices={questionsData[questIndexState]?.choices || []}
                    id={questionsData[questIndexState]?.id || null}
                    callBackFunc={changeAnswerValue}
                />
                <QuizNavigator questIndex={questIndexState} onChange={setIndexQuesCombo} onSubmitData={handleSubmit} />
            </div>
        </>
    );
};

export default withMyTheme(Quiz);
