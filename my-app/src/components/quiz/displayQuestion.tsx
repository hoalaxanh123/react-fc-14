import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// import FormGroup from '@material-ui/core/FormGroup';
// import Checkbox from '@material-ui/core/Checkbox';
import { myStyle } from '../../styles';
import { useState } from 'react';
import { getUserAnswers, setUserAnswerRadio } from '../../utils';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

interface DisplayQuestion {
    title: string;
    question: string;
    choices: Array<string>;
    id: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callBackFunc?: any;
}

const DisplayQuestion: React.FC<DisplayQuestion> = (props: DisplayQuestion) => {
    const classes = myStyle();
    const { id, title, question, choices, callBackFunc } = props;
    const [answerState, setAnswerState] = useState(getUserAnswers());

    const handleChangeOption = (event) => {
        const value = (event.target as HTMLInputElement).value;
        setAnswerState(setUserAnswerRadio(id, value));
        if (!answerState[id]) {
            callBackFunc();
        }
    };
    if (choices.length === 0) {
        return (
            <div className={classes.center}>
                <img src="cry.png" alt="cry" width={'80%'} />
                <h2>Sorry, we don&apos;t have any questions for you</h2>
            </div>
        );
    }

    const renderChoices = Object.keys(choices).map((key) => {
        return (
            <FormControlLabel
                key={key}
                control={<Radio color="primary" />}
                value={key}
                label={choices[key]}
                className={classes.FormControlLabel}
            />
        );
    });

    return (
        <div>
            <div>
                <span className={classes.questionText}>{title}</span>
            </div>
            <hr />
            <FormControl component="fieldset" className={classes.formControl}>
                <h2>{question}</h2>
                <RadioGroup value={answerState[id] || null} onChange={handleChangeOption}>
                    {renderChoices}
                </RadioGroup>
            </FormControl>
        </div>
    );
};
export default DisplayQuestion;
