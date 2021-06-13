import React from 'react';
import { Container } from '@material-ui/core';
import withMyTheme from '../HOC';

const Quiz: React.FC = () => {
    return (
        <Container maxWidth="md" component="main">
            <h1>Quiz page</h1>
        </Container>
    );
};

export default withMyTheme(Quiz);
