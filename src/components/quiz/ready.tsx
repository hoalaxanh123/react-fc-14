import React from 'react';
import { myStyle } from '../../styles';
import GavelIcon from '@material-ui/icons/Gavel';
import Button from '@material-ui/core/Button';

interface LoadingQuestProps {
    handleClickReadyButton?: () => void;
}

const GetReadyQuest: React.FC<LoadingQuestProps> = (props: LoadingQuestProps) => {
    const classes = myStyle();
    return (
        <>
            <div className={classes.quizBox}>
                <h2 className={classes.titleRule}>
                    Some Rules of this Quiz&nbsp; <GavelIcon />
                </h2>
                <hr />
                <ul className={classes.listRule}>
                    <li>Once you select your answer, it can&apos;t be un-check.</li>
                    <li>You can&apos;t select multi option.</li>
                    <li>You have to choose your answer for all questions.</li>
                    <li>You&apos;ll get points on the basis of your correct answers.</li>
                    <li>That all, have fun !</li>
                </ul>
                <hr />

                <div className={classes.buttonGotoQuiz}>
                    <Button variant="contained" color="primary" onClick={() => props.handleClickReadyButton()}>
                        READY, LET GO !!!
                    </Button>
                </div>
            </div>
        </>
    );
};
export default GetReadyQuest;
