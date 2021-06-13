import React from 'react';
import { Link } from 'react-router-dom';
import { LINK_URL } from '../constants';
import { Container } from '@material-ui/core';
import { myStyle } from '../styles';

const Forbidden: React.FC = () => {
    const classes = myStyle();

    return (
        <Container maxWidth="lg" component="main" className={classes.errorPage}>
            <h1>403</h1>
            <h2>An error occurred when we tried to process your request !</h2>
            <Link to={LINK_URL.homepage}>Click here to go back</Link>
        </Container>
    );
};

export default Forbidden;
