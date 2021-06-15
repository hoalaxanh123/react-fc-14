import React from 'react';
import withMyTheme from '../HOC';
import { Link } from 'react-router-dom';
import { LINK_URL, PAGE_TITLES } from '../constants';
import { myStyle } from '../styles';
import { Container } from '@material-ui/core';

const NotFound: React.FC = () => {
    const classes = myStyle();
    return (
        <Container maxWidth="lg" className={classes.errorPage}>
            <img src="404.png" width={'65%'} alt="404 logo" />
            <h2>Sorry, the resource that you looking for no longer exist</h2>
            <Link to={LINK_URL.homepage} className={classes.buttonLink}>
                go back to home
            </Link>
        </Container>
    );
};

export default withMyTheme(NotFound, PAGE_TITLES[404]);
