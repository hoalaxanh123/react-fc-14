import React, { useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import LoginComponent from '../common/login';
import { modalStyle } from '../../styles';

interface loginModalProps {
    isDisplayModal: boolean;
    setShowModal: (show: boolean) => void;
}
export const LoginModal: React.FC<loginModalProps> = (props: loginModalProps) => {
    const classes = modalStyle();
    const { isDisplayModal, setShowModal } = props;

    const [open, setOpen] = React.useState(isDisplayModal);

    useEffect(() => {
        setOpen(isDisplayModal);
    }, [isDisplayModal]);

    const handleClose = () => {
        setOpen(false);
        setShowModal(false);
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <LoginComponent />
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};
