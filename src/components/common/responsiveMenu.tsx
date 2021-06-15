import { AppBar, Toolbar, Typography, IconButton, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { LINK_URL, LOGGED, ROLE } from '../../constants';
import { myStyle } from '../../styles';
import CustomNavLink from '../custom/customLink';
import UserMenu from './userMenu';
import Divider from '@material-ui/core/Divider';

export const MyResponsiveMenu: React.FC = () => {
    const classes = myStyle();
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });
    const logged = localStorage.getItem(LOGGED);
    const role = localStorage.getItem(ROLE);

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener('resize', () => setResponsiveness());

        return () => {
            window.removeEventListener('resize', () => setResponsiveness());
        };
    }, []);
    const LinkToLogin = (
        <>
            <RouterLink
                to={{ pathname: LINK_URL.login, state: { from: window.location.href } }}
                className={classes.btnLogin}
            >
                {'Login'}
            </RouterLink>
        </>
    );
    const LoginOrLogoutComponent = logged ? <UserMenu isUsingMobile={state.mobileView} /> : LinkToLogin;
    const LinkToManagement =
        role !== 'admin' ? null : (
            <CustomNavLink to={LINK_URL.management} label="Management" activeOnlyWhenExact={false} />
        );
    const displayDesktop = () => {
        return (
            <Toolbar className={classes.toolbar}>
                {logoElement}
                {getMenuForDesktopView()}
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: 'start',
                        color: 'inherit',
                        'aria-label': 'menu',
                        'aria-haspopup': 'true',
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    {...{
                        anchor: 'left',
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    {getMenuForMobileView()}
                </Drawer>

                <div>{logoElement}</div>
            </Toolbar>
        );
    };

    const getMenuForMobileView = () => {
        return (
            <div className={classes.menuResponsiveMobileContainer}>
                <ul className={classes.menuResponsiveMobile}>
                    <li>
                        <CustomNavLink to={LINK_URL.homepage} label={'Home'} activeOnlyWhenExact={true} />
                    </li>
                    <li>
                        <CustomNavLink to={LINK_URL.quiz} label="Quiz" activeOnlyWhenExact={false} />
                    </li>
                    <li>
                        <CustomNavLink to={LINK_URL.result} label="Result" activeOnlyWhenExact={false} />
                    </li>
                    <li>
                        <CustomNavLink to={LINK_URL.about} label="About" activeOnlyWhenExact={false} />
                    </li>
                    <li>{LinkToManagement}</li>
                    <li>
                        <Divider />
                    </li>
                    <li>{LoginOrLogoutComponent}</li>
                </ul>
            </div>
        );
    };

    const logoElement = (
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <RouterLink to={LINK_URL.homepage} className={classes.menuTittle}>
                Quiz Challenge
            </RouterLink>
        </Typography>
    );

    const getMenuForDesktopView = () => {
        return (
            <>
                <nav>
                    <CustomNavLink to={LINK_URL.homepage} label={'Home'} activeOnlyWhenExact={true} />
                    <CustomNavLink to={LINK_URL.quiz} label="Quiz challenge" activeOnlyWhenExact={false} />
                    <CustomNavLink to={LINK_URL.result} label="Result" activeOnlyWhenExact={false} />
                    <CustomNavLink to={LINK_URL.about} label="About" activeOnlyWhenExact={false} />
                    {LinkToManagement}
                </nav>
                {LoginOrLogoutComponent}
            </>
        );
    };

    return (
        <AppBar position="relative" color="inherit" className={classes.menuHeader}>
            {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
    );
};
export default MyResponsiveMenu;
