import React from 'react';
import withMyTheme from '../HOC';
import { PAGE_TITLES } from '../constants';
import { myStyle } from '../styles';

const About: React.FC = () => {
    const classes = myStyle();
    return (
        <div className={classes.aboutPage}>
            <h2>FEATURES</h2>
            <ul className={classes.listRequirement}>
                <li>
                    <b>Support responsive.</b>
                </li>
                <li>There is effect on hover and active menu.</li>
                <li>Accounts: admin and test with the same password 123456.</li>
                <li>Account test can&apos;t access into the page management (/management), it will raise error 403.</li>
                <li>Users can print their results.</li>
                <li>Automatically format code when committing code.</li>
                <li>User can continue their in-progress test.</li>
                <li>If the user logs in with another account, the old progress session will be deleted.</li>
                <li>Each page has its own title.</li>
                <li>There is a User menu for authenticated users at the top right of the screen.</li>
                <li>
                    [1]When the user is not logged and wants to access some page that requires authentication, it will
                    be redirected to the login page.
                </li>
                <li>
                    [2]After the user logs in, the system will redirect to the page the user wants to visit. Currently,
                    the user will go to About page after login by default.
                </li>

                <li>[DEBUG]Users can manually delete their progress session (dropdown menu).</li>
                <li>If there are any problems, clearing the browser cache may helpful (dropdown menu).</li>
            </ul>
            <h2>REQUIREMENTS</h2>
            <ul className={classes.listRequirement}>
                <li>Routing must be satisfied.</li>
                <li>Logged in user can not access login page.</li>
                <li>Guest can not access quizzes page.</li>
                <li>Quizzes is fetched/loaded when logged in user access from api or pre-defined json list.</li>
                <li>Multiple-choice question is rendered so that user can answer them sequentially.</li>
                <li>User can click/check to confirm their answers.</li>
                <li>Result only show after user has answered all the question.</li>
                <li>TypeScript is recommended with well typing definition.</li>
                <li>Well-structured project and linting enabled is a plus.</li>
                <li>403 routing page for unauthorized access.</li>
                <li>404 routing page for non-existing page.</li>
                <li>Password input must not show in plain text.</li>
                <li>Handle username/password simple validation.</li>
                <li>Welcome message (notification/snackbar) for logged in user.</li>
                <li>Warning message (notification/snackbar) if a logged in user attempt to access login page.</li>
                <li>Use backend api to fetch question list and validate the answers.</li>
                <li>Favicon/Page title/Font/Color should be relevant.</li>
                <li>Answer completion progress bar may be provided (and/or current progress over all).</li>
                <li>User can check back their answers and result after all (their answer vs the correct one).</li>
                <li>User may continue their in-progress test.</li>
            </ul>
        </div>
    );
};

export default withMyTheme(About, PAGE_TITLES.about);
