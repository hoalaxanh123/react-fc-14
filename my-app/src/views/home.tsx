import React from 'react';
import { PAGE_TITLES, LINK_URL, LOGGED } from '../constants';
import { myStyle } from '../styles';
import withMyTheme from '../HOC';
import WarningIcon from '@material-ui/icons/Warning';
import { Link } from 'react-router-dom';
import ErrorIcon from '@material-ui/icons/Error';

const HomepageAuthorized = (classes) => (
    <div className={classes.notify}>
        <ErrorIcon className={classes.ErrorIcon} />
        <h1>Challenge accepted</h1>
        <h5>You have not finished your challenge yet. Get it now to receive your ranking</h5>
        <Link to={LINK_URL.quiz} className={classes.buttonLink}>
            Go to Quiz challenge
        </Link>
    </div>
);

const HomepageUnauthorized = (classes) => (
    <div className={classes.notify}>
        <WarningIcon className={classes.warningIcon} />
        <h1>Are you ready for challenge?</h1>
        <h5>The quiz is ready to start, but you need to login first to accept it</h5>
        <Link to={LINK_URL.login} className={classes.buttonLink}>
            Login to your account
        </Link>
    </div>
);

const Homepage: React.FC = () => {
    const logged = localStorage.getItem(LOGGED);
    const classes = myStyle();
    if (logged) {
        return HomepageAuthorized(classes);
    }
    return HomepageUnauthorized(classes);
};

export default withMyTheme(Homepage, PAGE_TITLES.home);
