import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { myStyle } from '../../styles';
import { LINK_URL, LOGGED, RESULT_DATA, ROLE, USERNAME } from '../../constants';
import { useHistory } from 'react-router';
import { clearAnswers } from '../../utils';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AdbIcon from '@material-ui/icons/Adb';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';

import useSnackBar from '../../hook';

interface UserMenuProps {
    isUsingMobile?: boolean;
}

export const UserMenu: React.FC<UserMenuProps> = (props: UserMenuProps) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { isUsingMobile } = props;
    const classes = myStyle();
    const history = useHistory();
    const { showSnackbar } = useSnackBar();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const test403Page = () => {
        history.replace(LINK_URL.test_403);
    };
    const clearResult = () => {
        localStorage.removeItem(RESULT_DATA);
        if (window.location.pathname === LINK_URL.result) {
            window.location.reload();
        }
        handleClose();
    };
    const deleteAnswers = () => {
        clearAnswers();
        if (window.location.pathname === LINK_URL.quiz) {
            window.location.reload();
        }
    };
    const handleLogout = () => {
        localStorage.removeItem(LOGGED);
        localStorage.removeItem(USERNAME);
        localStorage.removeItem(ROLE);
        handleClose();
        window.location.reload();
    };
    const clearCache = () => {
        localStorage.clear();
        window.location.reload();
    };
    const notImplementYet = () => {
        showSnackbar("Oops, it's still under construction, please use another option !", 'error');
        handleClose();
    };
    const renderMenuController = () => {
        if (!isUsingMobile) {
            return (
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
            );
        }
        return (
            <span className={classes.link} onClick={handleClick}>
                <AssignmentIndIcon />
                <label style={{ cursor: 'pointer', display: 'table-caption', width: 'max-content' }}>
                    Hi, {localStorage.getItem(USERNAME)}
                </label>
            </span>
        );
    };

    return (
        <>
            {renderMenuController()}

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={notImplementYet}>
                    <PersonIcon fontSize="small" />
                    &nbsp;&nbsp;Profile
                </MenuItem>

                <MenuItem onClick={notImplementYet}>
                    <SettingsIcon fontSize="small" />
                    &nbsp;&nbsp;Setting
                </MenuItem>
                <Divider />

                <MenuItem onClick={deleteAnswers}>
                    <DeleteOutlineIcon fontSize="small" />
                    &nbsp;&nbsp;Clear answers
                </MenuItem>

                <MenuItem onClick={clearResult}>
                    <DeleteIcon fontSize="small" />
                    &nbsp;&nbsp;Clear result
                </MenuItem>

                <MenuItem onClick={clearCache}>
                    <DeleteForeverIcon fontSize="small" />
                    &nbsp;&nbsp;Clear cache
                </MenuItem>

                <MenuItem onClick={test403Page}>
                    <AdbIcon fontSize="small" />
                    &nbsp;&nbsp;Test 403 page
                </MenuItem>
                <Divider />

                <MenuItem onClick={handleLogout}>
                    <ExitToAppIcon fontSize="small" />
                    &nbsp;&nbsp;Logout
                </MenuItem>
            </Menu>
        </>
    );
};
export default UserMenu;
