import React from 'react';
import { LINK_URL, LOGGED } from '../constants';
import { Route, Redirect } from 'react-router-dom';

interface privateRouteProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any;
    exact: boolean;
    path?: string;
}

export const PrivateRoute: React.FC<privateRouteProps> = ({ children, ...rest }: privateRouteProps) => {
    const logged = localStorage.getItem(LOGGED);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                logged ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: LINK_URL.login,
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};
