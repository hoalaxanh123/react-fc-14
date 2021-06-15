import React from 'react';

import CopyrightCustom from '../components/partials/copyright';
import { CssBaseline } from '@material-ui/core';
import { Toaster } from 'react-hot-toast';
import { MESSAGE_BAR_DURATION } from '../constants';
import '../styles/my-css.scss';
import { Container } from '@material-ui/core';
import Head from '../components/common/head';
import MyResponsiveMenu from '../components/common/responsiveMenu';
import { ConfirmProvider } from 'material-ui-confirm';

const withMyTheme = (WrappedComponent: React.ComponentType, title = '') => {
    // eslint-disable-next-line react/display-name,@typescript-eslint/explicit-module-boundary-types
    return function () {
        return (
            <ConfirmProvider>
                <CssBaseline />
                {/* Head */}
                <Head title={title || ''} />
                {/* End Head */}

                {/* Menu */}
                <MyResponsiveMenu />
                {/* <MyMenu /> */}

                {/* End Menu */}

                {/* Content */}
                <Container maxWidth="md" className={'my-main-contain'}>
                    <WrappedComponent />
                </Container>
                {/* End Content */}

                {/* Copyright */}
                <CopyrightCustom />
                {/* End Copyright */}

                {/* Message bar */}
                <Toaster
                    position="bottom-center"
                    toastOptions={{
                        duration: MESSAGE_BAR_DURATION,
                    }}
                />
                {/* End Message bar */}
            </ConfirmProvider>
        );
    };
};
export default withMyTheme;
