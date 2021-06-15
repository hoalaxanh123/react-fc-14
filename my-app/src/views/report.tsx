import React, { useEffect, useState } from 'react';

import withMyTheme from '../HOC';
import { API_URLS, LINK_URL, PAGE_TITLES } from '../constants';
import { getAnswerIndexes, getQuestions, getUserAnswers, preparePayloadForCheckAnswers } from '../utils';
import { myStyle } from '../styles';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useSnackBar from '../hook';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const ResultPage: React.FC = () => {
    // State
    const defaultState = { status: 'P', incorrectAnswers: [] };
    const [isFetching, setIsFetching] = useState(false);
    const [resultData, setResultData] = useState(defaultState);

    // Variables
    const classes = myStyle();
    const questions = getQuestions();
    const answersIndexes = getAnswerIndexes();
    const answers = getUserAnswers();
    console.log('answers :>> ', answers);
    const inValidData =
        (questions.length === 0 && answersIndexes.length === 0) || questions.length !== answersIndexes.length;
    const { showSnackbar } = useSnackBar();

    const wrongQuestIds = resultData.status === 'F' ? resultData.incorrectAnswers.map((questOBj) => questOBj.id) : [];
    const passQuestion = questions.length - wrongQuestIds.length;

    // Hooks
    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            const payload = preparePayloadForCheckAnswers();
            console.log('payload :>> ', payload);
            await axios
                .post(API_URLS.fetchAnswer, payload)
                .then((res) => {
                    setResultData(res.data);
                })
                .catch((error) => {
                    setResultData(defaultState);
                    showSnackbar(`Can't check your answers: ${error}`, 'error');
                })
                .finally(() => {
                    setIsFetching(false);
                });
        };

        fetchData();
    }, []);

    // Render
    if (inValidData) {
        return (
            <div className={classes.center} style={{ padding: '50px' }}>
                <img src="low_battery.png" />
                <h1>You don&apos;t have any records, take your challenge first!</h1>
                <Link to={LINK_URL.quiz} className={'button-link'}>
                    Take now !
                </Link>
            </div>
        );
    }
    if (isFetching) {
        return (
            <div className={classes.center} style={{ padding: '50px' }}>
                <h1>Fetching data....</h1>
            </div>
        );
    }

    let count = 0;
    const renderAnswer = (questID, answerObj) => {
        return Object.keys(answerObj).map((key) => {
            const thisAnswerObj = answerObj[key];
            return (
                <li key={`${questID}.${key}`}>
                    {key}: {thisAnswerObj}
                </li>
            );
        });
    };
    const renderQuest = questions.map((questObj) => {
        count += 1;
        const isTrue = !wrongQuestIds.includes(questObj.id);
        const answerTextClass = isTrue ? classes.answerTextPass : classes.answerTextFail;
        const answerIcon = isTrue ? <CheckIcon /> : <CloseIcon />;
        const questionClass = wrongQuestIds.includes(questObj.id) ? 'fail-quest' : 'pass-quest';
        console.log('questionClass :>> ', questionClass);
        return (
            <div key={questObj.id}>
                <h4>
                    Question {count}: {questObj.question}
                </h4>
                <ul className={classes.questionBlock}>{renderAnswer(questObj.id, questObj.choices)}</ul>
                <h4 className={answerTextClass}>
                    Your answer: {answers[questObj.id]?.toString()} {answerIcon}
                </h4>
            </div>
        );
    });
    const print = () => {
        window.print();
    };
    return (
        <div className={classes.reportBox}>
            <button onClick={print} className="noPrint">
                Print result
            </button>
            <h1 style={{ color: 'red' }}>
                Congratulation, you have finished the test with result {passQuestion}/{questions.length} correct
                answers!!
            </h1>
            {renderQuest}
        </div>
    );
};

export default withMyTheme(ResultPage, PAGE_TITLES.result);
