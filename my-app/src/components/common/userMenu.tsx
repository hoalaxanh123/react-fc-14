import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { myStyle } from '../../styles';
import { LOGGED, ROLE, USERNAME } from '../../constants';

export const UserMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = myStyle();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem(LOGGED);
        localStorage.removeItem(USERNAME);
        localStorage.removeItem(ROLE);
        handleClose();
        window.location.reload();
    };

    return (
        <>
            <Button
                color="primary"
                variant="outlined"
                className={classes.link}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                Hi, {localStorage.getItem(USERNAME)}
            </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Setting</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    );
};
export default UserMenu;
