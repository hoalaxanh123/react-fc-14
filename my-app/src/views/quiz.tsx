import React from 'react';
import withMyTheme from '../HOC';

import { myStyle } from '../styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DisplayQuestion from '../components/quiz/displayQuestion';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { getCurrentIndexQuestion, setIndexQuestion } from '../utils';
import { API_URLS, BTN_NEXT_LABEL, BTN_PREVIOUS_LABEL } from '../constants';
import useSnackBar from '../hook';

const Quiz: React.FC = () => {
    // Variables
    const classes = myStyle();
    const buttons = [];
    const [quesIndexState, setQuestIndexState] = useState(getCurrentIndexQuestion());
    const [isFetching, setIsFetching] = useState(false);
    const [questionsData, setQuestionsData] = useState([]);
    const { showSnackbar } = useSnackBar();

    const commonCondition = questionsData.length === 0 || isFetching;
    const isDisablePreviousButton = commonCondition || quesIndexState === 0;
    const isDisableNextButton = commonCondition || quesIndexState + 1 === questionsData.length;

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
                    console.log('error :>> ', error);
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
        const index = Number(e.target.innerText);
        if (index) {
            setIndexQuesCombo(index - 1);
        }
    };
    const setIndexQuesCombo = (index) => {
        setIndexQuestion(index);
        setQuestIndexState(index);
    };
    const handleNavButton = (e) => {
        switch (e.target.innerText.toUpperCase()) {
            case BTN_PREVIOUS_LABEL.toUpperCase():
                setIndexQuesCombo(quesIndexState - 1);
                break;
            case BTN_NEXT_LABEL.toUpperCase():
                setIndexQuesCombo(quesIndexState + 1);
                break;
            default:
                break;
        }
    };

    // Render
    const quizBoxTitle =
        questionsData?.length > 0
            ? `Question ${quesIndexState + 1} of ${questionsData.length}`
            : 'Well, no questions for you :((';
    const renderContent = isFetching ? (
        <h1>Getting questions.....</h1>
    ) : (
        <DisplayQuestion
            title={quizBoxTitle}
            question={questionsData[quesIndexState]?.question}
            choices={questionsData[quesIndexState]?.choices || []}
        />
    );
    for (let index = 1; index <= questionsData.length; index++) {
        buttons.push(
            <Grid key={index} item>
                <Button
                    variant="contained"
                    onClick={handleChangeQuestionIndex}
                    disabled={isFetching || index === quesIndexState + 1}
                >
                    {index}
                </Button>
            </Grid>,
        );
    }

    return (
        <>
            {/* <div className="overral"> */}
            <div className={classes.quizBox}>
                {renderContent}
                <br />
                <br />
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.buttonNext}
                        disabled={isDisablePreviousButton}
                        onClick={handleNavButton}
                    >
                        {BTN_PREVIOUS_LABEL}
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.buttonNext}
                        disabled={isDisableNextButton}
                        onClick={handleNavButton}
                    >
                        {BTN_NEXT_LABEL}
                    </Button>
                </div>
                <hr />
                <Grid container spacing={2} style={{ margin: '0 auto' }}>
                    {buttons}
                </Grid>
                <hr />
            </div>
            {/* </div> */}
        </>
    );
};

export default withMyTheme(Quiz);
