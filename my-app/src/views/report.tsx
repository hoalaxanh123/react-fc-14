import React from 'react';

import { Container } from '@material-ui/core';
import withMyTheme from '../HOC';
import { PAGE_TITLES } from '../constants';

const ResultPage: React.FC = () => {
    return (
        <Container maxWidth="md" component="main">
            <h1>Result page</h1>
        </Container>
    );
};

export default withMyTheme(ResultPage, PAGE_TITLES.result);
