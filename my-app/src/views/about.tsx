import React from 'react';
import { Container } from '@material-ui/core';
import withMyTheme from '../HOC';

const About: React.FC = () => {
    return (
        <Container maxWidth="md" component="main">
            <h1>About page</h1>
        </Container>
    );
};

export default withMyTheme(About);
