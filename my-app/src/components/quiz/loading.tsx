import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { myStyle } from '../../styles';

const LoadingQuest: React.FC = () => {
    const classes = myStyle();
    return (
        <div className={classes.center}>
            <CircularProgress size={80} color="secondary" />
            <h1>Getting questions.....</h1>
        </div>
    );
};
export default LoadingQuest;
