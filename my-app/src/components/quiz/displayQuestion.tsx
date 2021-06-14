import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { myStyle } from '../../styles';

interface DisplayQuestion {
    title: string;
    question: string;
    choices: Array<string>;
}

const DisplayQuestion: React.FC<DisplayQuestion> = (props: DisplayQuestion) => {
    const classes = myStyle();
    const { title, question, choices } = props;
    const handleChange = (event) => {
        // setState({ ...state, [event.target.name]: event.target.checked });
        console.log('event.target :>> ', event.target);
    };
    if (choices.length === 0) {
        return (
            <div className={classes.center}>
                <img src="cry.png" alt="cry" width={'80%'} />
                <h2>Sorry, we don&apost have questions for you</h2>
            </div>
        );
    }

    const renderChoices = Object.keys(choices).map((key) => (
        <FormControlLabel
            key={key}
            control={<Checkbox color="primary" checked={false} onChange={handleChange} name={key} />}
            label={choices[key]}
            className={classes.FormControlLabel}
        />
    ));

    return (
        <div>
            <div>
                <span className={classes.questionText}>{title}</span>
                <div className="timer">
                    <div className="time_left_txt">Time Off</div>
                    <div className="timer_sec">00</div>
                </div>
            </div>
            <hr />
            <FormControl component="fieldset" className={classes.formControl}>
                <h2>{question}</h2>
                <FormGroup className={classes.formGroup}>{renderChoices}</FormGroup>
            </FormControl>
        </div>
    );
};
export default DisplayQuestion;
