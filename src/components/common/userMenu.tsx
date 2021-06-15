import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { myStyle } from '../../styles';
import { LINK_URL, LOGGED, ROLE, USERNAME } from '../../constants';
import { useHistory } from 'react-router';
import { clearAnswers } from '../../utils';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

interface UserMenuProps {
    isUsingMobile?: boolean;
}

export const UserMenu: React.FC<UserMenuProps> = (props: UserMenuProps) => {
    console.log('props :>> ', props);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { isUsingMobile } = props;
    console.log('isUsingMobile :>> ', isUsingMobile);
    const classes = myStyle();
    const history = useHistory();

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
    const deleteAnswers = () => {
        clearAnswers();
        window.location.reload();
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Setting</MenuItem>
                <MenuItem onClick={test403Page}>Test 403 page</MenuItem>
                <MenuItem onClick={deleteAnswers}>Delete answers</MenuItem>
                <MenuItem onClick={clearCache}>Clear cache</MenuItem>

                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    );
};
export default UserMenu;
