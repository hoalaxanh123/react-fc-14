import toast from 'react-hot-toast';

const darkMode = {
    style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
        fontSize: '13px',
    },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useSnackBar = (): any => {
    const showSnackbar = (message = '', type = '') => {
        switch (type) {
            case 'success':
                return toast.success(message, darkMode);
            case 'error':
                return toast.error(message, darkMode);
            case 'loading':
                return toast.loading(message, darkMode);
            default:
                return toast(message, darkMode);
        }
    };

    const hideSnackBar = (snackBarID: string) => {
        toast.dismiss(snackBarID);
    };

    return {
        showSnackbar,
        hideSnackBar,
    };
};
export default useSnackBar;
