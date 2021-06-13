import React from 'react';
import withMyTheme from '../HOC';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { myStyle } from '../styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { withStyles } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';

const Quiz: React.FC = () => {
    const classes = myStyle();
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { gilad, jason, antoine } = state;
    const buttons = [];
    for (let index = 1; index <= 10; index++) {
        buttons.push(
            <Button variant="contained" style={{ maxWidth: '5px' }}>
                {index}
            </Button>,
        );
    }
    const ColorButton = withStyles(() => ({
        root: {
            height: '40px',
            padding: '0 13px',
            fontSize: '18px',
            fontWeight: 400,
            cursor: 'pointer',
            outline: 'none',
            color: '#fff',
            borderRadius: '5px',
            background: '#007bff',
            border: '1px solid #007bff',
            lineHeight: '10px',
            transform: 'scale(0.95)',
            transition: 'all 0.3s ease',
            '&:hover': {
                backgroundColor: '#0263ca',
            },
        },
    }))(Button);
    return (
        <>
            <div className={classes.quizBox}>
                <div>
                    <span className={classes.questionText}>Question 1</span>
                    <div className="timer">
                        <div className="time_left_txt">Time Off</div>
                        <div className="timer_sec">00</div>
                    </div>
                </div>
                <hr />
                <FormControl component="fieldset" className={classes.formControl}>
                    <h2>Who are you?</h2>
                    <FormGroup className={classes.formGroup}>
                        <FormControlLabel
                            control={<Checkbox color="primary" checked={gilad} onChange={handleChange} name="gilad" />}
                            label="Tao"
                            className={classes.FormControlLabel}
                        />
                        <FormControlLabel
                            control={<Checkbox color="primary" checked={jason} onChange={handleChange} name="jason" />}
                            label="Me"
                            className={classes.FormControlLabel}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox color="primary" checked={antoine} onChange={handleChange} name="antoine" />
                            }
                            label="Tớ"
                            className={classes.FormControlLabel}
                        />
                    </FormGroup>
                    <FormHelperText></FormHelperText>
                </FormControl>
                <br />
                <br />
                <div>
                    <ColorButton variant="contained" className={classes.buttonNext}>
                        Next
                    </ColorButton>
                </div>
                <hr />
                <ButtonGroup
                    variant="text"
                    color="primary"
                    aria-label="text primary button group"
                    style={{ width: '100%' }}
                >
                    {buttons}
                </ButtonGroup>
                <hr />
            </div>
        </>
    );
};

export default withMyTheme(Quiz);
