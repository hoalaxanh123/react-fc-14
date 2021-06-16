import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import PublishIcon from '@material-ui/icons/Publish';
import { getAnswerIndexes, getQuestions, isEligibleForSubmit } from '../../utils';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { BTN_NEXT_LABEL, BTN_PREVIOUS_LABEL, BTN_SUBMIT_LABEL } from '../../constants';
import { myStyle } from '../../styles';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import LinearProgress from '@material-ui/core/LinearProgress';

interface QuizNavigatorProps {
    questIndex: number;
    onChange: (number) => void;
    onSubmitData: () => void;
}

export const QuizNavigator: React.FC<QuizNavigatorProps> = (props: QuizNavigatorProps) => {
    const { questIndex, onChange, onSubmitData } = props;
    const classes = myStyle();
    const questionsData = getQuestions();
    const questIds = questionsData.map((x) => x.id);
    const answerIds = getAnswerIndexes();
    const buttons = [];

    const canSubmit = isEligibleForSubmit(questionsData.length);

    for (let index = 0; index < questIds.length; index++) {
        const answered = answerIds.includes(questIds[index].toString());
        buttons.push(
            <Grid key={index} item>
                <Button
                    variant="contained"
                    onClick={() => onChange(index)}
                    color={answered ? 'primary' : 'default'}
                    disabled={index === questIndex}
                    endIcon={answered ? <CheckIcon /> : null}
                    className={classes.buttonNavIndex}
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
                endIcon={<PublishIcon />}
                onClick={() => onSubmitData()}
            >
                {BTN_SUBMIT_LABEL}
            </Button>
        </Grid>,
    );
    const processBarValue = (answerIds.length / questIds.length) * 100;

    return (
        <>
            <Grid container spacing={2} className={classes.gridBetween}>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.buttonNav}
                    startIcon={<ArrowLeftIcon />}
                    disabled={questIndex - 1 < 0}
                    onClick={() => onChange(questIndex - 1)}
                >
                    {BTN_PREVIOUS_LABEL}
                </Button>

                <Button
                    variant="contained"
                    color={'primary'}
                    className={classes.buttonNav}
                    endIcon={<ArrowRightIcon />}
                    disabled={questIndex + 1 === questIds.length}
                    onClick={() => onChange(questIndex + 1)}
                >
                    {BTN_NEXT_LABEL}
                </Button>
            </Grid>
            <div className={classes.progressBar}>
                <LinearProgress variant="determinate" value={processBarValue} />
            </div>
            <Grid container spacing={1} className={classes.gridCenter}>
                {buttons}
            </Grid>
        </>
    );
};

export default QuizNavigator;
