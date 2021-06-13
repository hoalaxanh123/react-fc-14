import React from 'react';

import CopyrightCustom from '../components/partials/copyright';
import { CssBaseline } from '@material-ui/core';
import { Toaster } from 'react-hot-toast';
import MyMenu from '../components/common/menu';
import { MESSAGE_BAR_DURATION } from '../constants';
import '../styles/my-css.scss';
import { Container } from '@material-ui/core';
import Head from '../components/common/head';

const withMyTheme = (WrappedComponent: React.ComponentType, title = '') => {
    // eslint-disable-next-line react/display-name,@typescript-eslint/explicit-module-boundary-types
    return function () {
        return (
            <>
                <CssBaseline />
                {/* Head */}
                <Head title={title || ''} />
                {/* End Head */}

                {/* Menu */}
                <MyMenu />
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
            </>
        );
    };
};
export default withMyTheme;
