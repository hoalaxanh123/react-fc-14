import { makeStyles } from '@material-ui/core/styles';

export const myStyle = makeStyles((theme) => ({
    loginRoot: {
        marginTop: '10px',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    loginForm: {
        height: '60vh',
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: 'red',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.87)',
        // fontSize: '0.875rem',
        lineHeight: 1.75,
        letterSpacing: '0.02857em',
        textTransform: 'uppercase',
        transition: '0.2s',
        '&:hover': {
            fontWeight: 'bold',
            textShadow: '4px 4px 4px #aaa',
        },
        '&:active': {
            color: 'red',
        },
    },
    btnLogin: {
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: '0.875rem',
        lineHeight: 1.75,
        letterSpacing: '0.02857em',
        textTransform: 'uppercase',
        border: '1px solid rgba(63, 81, 181, 0.5)',
        padding: '5px 15px 5px 15px',
        borderRadius: '4px',
    },
    menuTittle: {
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: '1.25rem',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 500,
        lineHeight: 1.6,
        letterSpacing: '0.0075em',
        textShadow: '4px 4px 4px #aaa',
    },
    menuActive: {
        fontWeight: 'bold',
        textShadow: '4px 4px 4px #aaa',
    },
    companyName: {
        fontWeight: 'bold',
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    image: {
        // backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundImage: 'url(/images/login_background.png)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    errorPage: {
        width: '90%',
        textAlign: 'center',
        paddingBottom: '100px',

        '&>h2': {
            marginTop: '50px',
        },
    },
    note: {
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: '1.5rem',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 400,
        lineHeight: 1.334,
        letterSpacing: '0em',
        textAlign: 'justify',
    },
    notify: {
        padding: '25% 0 25% 0',
        textAlign: 'center',
        '&>h5': {
            color: 'grey',
        },
    },
    warningIcon: {
        color: '#FFC53D',
        fontSize: '70px !important',
    },
    ErrorIcon: {
        color: '#1890FF',
        fontSize: '70px !important',
    },
}));

export const modalStyle = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
