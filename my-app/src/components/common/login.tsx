import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { myStyle } from '../../styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import useSnackBar from '../../hook';
import { LOGGED, ROLE, USERNAME } from '../../constants';

const LoginComponent: React.FC = () => {
    const classes = myStyle();
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('123456');
    const { showSnackbar, hideSnackBar } = useSnackBar();

    const changeUserName = (e: { target: { value: React.SetStateAction<string> } }) => {
        setUsername(e.target.value);
    };
    const changePassword = (e: { target: { value: React.SetStateAction<string> } }) => {
        setPassword(e.target.value);
    };
    const handleLogin = () => {
        if (!username || !password) {
            showSnackbar('Username and password are required.', 'error');
            return;
        }

        const snackBarLoadingID = showSnackbar('Logging...', 'loading');

        // Fake calling API
        setTimeout(() => {
            console.log('password :>> ', password);
            hideSnackBar(snackBarLoadingID);
            if (['admin', 'test'].includes(username) && password === '123456') {
                showSnackbar('Login success', 'success');
                localStorage.setItem(LOGGED, 'logged');
                localStorage.setItem(USERNAME, username);
                localStorage.setItem(ROLE, username === 'admin' ? 'admin' : 'user');
                window.location.href = '/';
            } else {
                showSnackbar('Your username or password is incorrect', 'error');
            }
        }, 1500);
    };

    return (
        <div className={classes.paper}>
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
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Username (admin/test)"
                    value={username}
                    onChange={changeUserName}
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    onChange={changePassword}
                    value={password}
                    type="password"
                />
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={handleLogin}
                >
                    Sign In
                </Button>
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
    );
};

export default LoginComponent;
