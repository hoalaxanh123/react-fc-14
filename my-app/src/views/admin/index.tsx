import React from 'react';

import { Container } from '@material-ui/core';
import { PAGE_TITLES, ROLE } from '../../constants';
import withMyTheme from '../../HOC';
import Forbidden from '../403';

const Management: React.FC = () => {
    const role = localStorage.getItem(ROLE);
    const managementComponent = (
        <Container maxWidth="md" component="main">
            <h1>Management page</h1>
        </Container>
    );
    return role === 'admin' ? managementComponent : <Forbidden />;
};

export default withMyTheme(Management, PAGE_TITLES.management);
