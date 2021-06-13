// same NavLink (https://reactrouter.com/web/api/NavLink)

import React from 'react';
import { myStyle } from '../../styles';
import { Link, useRouteMatch } from 'react-router-dom';
interface CustomLinkProp {
    to: string;
    activeOnlyWhenExact: boolean;
    label: string;
    location?: {
        pathname?: string;
    };
}
const CustomNavLink: React.FC<CustomLinkProp> = (props: CustomLinkProp) => {
    const { to, activeOnlyWhenExact, label } = props;
    const classes = myStyle();
    const match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact,
    });

    return (
        <span className={match ? classes.menuActive : ''}>
            <Link to={{ pathname: to, state: { from: props?.location?.pathname } }} className={classes.link}>
                {label}
            </Link>
        </span>
    );
};
export default CustomNavLink;
