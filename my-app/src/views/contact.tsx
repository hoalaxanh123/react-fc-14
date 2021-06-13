import React from 'react';

import { Container } from '@material-ui/core';
import withMyTheme from '../HOC';

const Contact: React.FC = () => {
    return (
        <Container maxWidth="md" component="main">
            <h1>Contact page</h1>
        </Container>
    );
};

export default withMyTheme(Contact);
