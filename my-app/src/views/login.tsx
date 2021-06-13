import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { myStyle } from '../styles';
import { useState } from 'react';

import ButtonCustom from '../components/functions/button';
import TextFieldCustom from '../components/functions/textField';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import useSnackBar from '../hook';
import { LINK_URL, LOGGED, PAGE_TITLES, ROLE, USERNAME } from '../constants';
import withMyTheme from '../HOC';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import { Redirect, useHistory } from 'react-router';

const Login: React.FC = () => {
    const classes = myStyle();
    const logged = localStorage.getItem(LOGGED);
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('123456');
    const { showSnackbar, hideSnackBar } = useSnackBar();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const history: any = useHistory();
    const previousURL = history?.location?.state?.from;

    let defaultURL = LINK_URL.homepage;

    // Handle private route
    if (typeof previousURL !== 'string') {
        defaultURL = previousURL?.pathname || defaultURL;
    }

    const changeUserName = (e: { target: { value: React.SetStateAction<string> } }) => {
        setUsername(e.target.value);
    };
    const changePassword = (e: { target: { value: React.SetStateAction<string> } }) => {
        setPassword(e.target.value);
    };
    const handleLogin = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (!username || !password) {
            showSnackbar('Username and password are required.', 'error');
            return;
        }

        const snackBarLoadingID = showSnackbar('Logging...', 'loading');

        // Fake calling API
        setTimeout(() => {
            hideSnackBar(snackBarLoadingID);
            if (['admin', 'test'].includes(username) && password === '123456') {
                showSnackbar('Login success', 'success');
                localStorage.setItem(LOGGED, 'true');
                localStorage.setItem(USERNAME, username);
                localStorage.setItem(ROLE, username === 'admin' ? 'admin' : 'user');
                previousURL && typeof previousURL === 'string' ? history.goBack() : history.replace(defaultURL);
            } else {
                showSnackbar('Your username or password is incorrect', 'error');
            }
        }, 500);
    };

    return logged ? (
        <Redirect to={LINK_URL.homepage} />
    ) : (
        <Container maxWidth="lg" component="main">
            <Grid container component="main" className={classes.loginRoot}>
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.loginForm}>
                        {/* Decorator */}
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        {/* End Decorator */}

                        {/* Form Login */}
                        <form className={classes.form} noValidate>
                            <TextFieldCustom
                                label="Username (admin/test)"
                                value={username}
                                onChange={changeUserName}
                                autoFocus
                            />
                            <TextFieldCustom
                                label="Password (123456)"
                                onChange={changePassword}
                                value={password}
                                type="password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" checked={true} />}
                                label="Remember me"
                            />
                            <ButtonCustom onClick={handleLogin} label="Sign In" />
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                        {/* End Form Login */}
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default withMyTheme(Login, PAGE_TITLES.login);
