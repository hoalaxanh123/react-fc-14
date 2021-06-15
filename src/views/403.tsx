import React from 'react';
import { Link } from 'react-router-dom';
import { LINK_URL, PAGE_TITLES } from '../constants';
import { Container } from '@material-ui/core';
import { myStyle } from '../styles';
import withMyTheme from '../HOC';

const Forbidden: React.FC = () => {
    const classes = myStyle();

    return (
        <Container maxWidth="lg" component="main" className={classes.errorPage}>
            <img src="403.png" />
            <h2>An error occurred when we tried to process your request !</h2>
            <Link to={LINK_URL.homepage} className={classes.buttonLink}>
                go back to home
            </Link>
        </Container>
    );
};

export default withMyTheme(Forbidden, PAGE_TITLES[403]);
