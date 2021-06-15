import React from 'react';
import { LINK_URL } from '../../constants';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AlarmIcon from '@material-ui/icons/Alarm';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

export const getIconByLink = (link: string, active: boolean): React.ReactElement => {
    switch (link) {
        case LINK_URL.homepage:
            return active ? <HomeIcon color="primary" /> : <HomeIcon />;
        case LINK_URL.login:
            return null;
        case LINK_URL.management:
            return active ? <SupervisorAccountIcon color="primary" /> : <SupervisorAccountIcon />;
        case LINK_URL.quiz:
            return active ? <AlarmIcon color="primary" /> : <AlarmIcon />;
        case LINK_URL.result:
            return active ? <ListAltIcon color="primary" /> : <ListAltIcon />;
        case LINK_URL.about:
            return active ? <LocalLibraryIcon color="primary" /> : <LocalLibraryIcon />;
        default:
            return null;
    }
};
