import React from 'react';

import { Container } from '@material-ui/core';
import { ROLE } from '../../constants';
import withMyTheme from '../../HOC';
import Forbidden from '../forbidden';

const Management: React.FC = () => {
    const role = localStorage.getItem(ROLE);
    const managementComponent = (
        <Container maxWidth="md" component="main">
            <h1>Management page</h1>
        </Container>
    );
    return role === 'admin' ? managementComponent : <Forbidden />;
};

export default withMyTheme(Management);
