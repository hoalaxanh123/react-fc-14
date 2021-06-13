import toast from 'react-hot-toast';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useSnackBar = (): any => {
    const showSnackbar = (message = '', type = '') => {
        switch (type) {
            case 'success':
                return toast.success(message);
            case 'error':
                return toast.error(message);
            case 'loading':
                return toast.loading(message);
            default:
                return toast(message);
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
