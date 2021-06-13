// same NavLink (https://reactrouter.com/web/api/NavLink)

import React from 'react';
import { myStyle } from '../../styles';
import { Link, useRouteMatch } from 'react-router-dom';
import { getIconByLink } from './icons';
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
    const icon = getIconByLink(to, match ? true : false);

    return (
        <span className={match ? classes.menuActive : ''}>
            <Link to={{ pathname: to, state: { from: props?.location?.pathname } }} className={classes.link}>
                <span>
                    {icon}
                    <label style={{ cursor: 'pointer', display: 'table-caption', width: 'max-content' }}>{label}</label>
                </span>
            </Link>
        </span>
    );
};
export default CustomNavLink;
