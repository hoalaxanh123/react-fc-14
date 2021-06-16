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
    formControl: {
        margin: theme.spacing(3),
        width: '100%',
    },
    formGroup: {
        marginLeft: '10px',
    },
    FormControlLabel: {
        background: 'aliceblue',
        border: '1px solid #84c5fe',
        borderRadius: '5px',
        padding: '5px 10px',
        fontSize: '17px',
        margin: '0 0 15px 0 !important',
        cursor: 'pointer',
        transition: 'all 0.5s ease',
        display: 'flex',
        alignItems: 'center',
        wordBreak: 'break-all',
        '&:hover': {
            color: '#004085',
            background: '#cce5ff',
            border: '1px solid #b8daff',
        },
        '@media (max-width: 1500px)': {
            fontSize: '12px',
            padding: '2.5px 10px',
            margin: '0 0 12px 0 !important',
        },
    },
    quizBox: {
        margin: '8% auto',
        padding: '30px',
        width: '70%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        zIndex: 9999999,
        background: '#fff',
        '@media (max-width: 1500px)': {
            margin: '1% auto',
            width: '68% !important',
        },
        '@media (max-width: 900px)': {
            margin: '8% auto',
            width: '100% !important',
        },
    },
    quizBoxReady: {
        margin: '8% auto',
        padding: '30px',
        width: '70%',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        zIndex: 9999999,
        background: '#fff',
        '@media (max-width: 900px)': {
            width: '100% !important',
        },
    },
    questionTitle: {
        fontSize: '25px',
        fontWeight: 600,
        textShadow: '1px 1px 1px grey',
        wordBreak: 'break-all',
        '@media (max-width: 1500px)': {
            fontSize: '22px',
        },
    },
    questionText: {
        fontSize: '22px',
        padding: '0 0 15px 0',
        fontWeight: 440,
        wordBreak: 'break-all',
        '@media (max-width: 1500px)': {
            fontSize: '19px',
        },
        '@media (max-width: 900px)': {
            fontSize: '18px',
        },
    },
    buttonNav: {
        transform: 'scale(0.95)',
        transition: 'all 0.3s ease',
    },
    buttonNavIndex: {
        // fontSize: '3px !important',
        // width: '3px !important',
        padding: '20px',
    },

    center: {
        margin: '0 auto',
        textAlign: 'center',
    },
    gridCenter: {
        justifyContent: 'center',
    },
    gridBetween: {
        justifyContent: 'space-between',
        padding: '10px 5px ',
    },
    progressBar: {
        padding: '10px 0',
    },
    reportBox: {
        textAlign: 'left',
    },
    reportDate: {
        fontStyle: 'italic',
        fontSize: '13px',
    },
    questionBlock: {
        marginTop: '-15px',
    },
    titleRule: {
        marginTop: '-10px',
        '@media (max-width: 900px)': {
            fontSize: '18px',
            textAlign: 'center',
        },
    },
    buttonGotoQuiz: {
        '@media (max-width: 900px)': {
            textAlign: 'center',
            margin: '0 auto',
        },
    },
    answerTextPass: {
        marginTop: '-10px',
        paddingBottom: '5px',
        color: 'green',
    },
    answerTextFail: {
        marginTop: '-10px',
        paddingBottom: '5px',
        color: 'red',
    },
    listRule: {
        '&>li': {
            listStyleType: 'circle',
            '@media (max-width: 900px)': { marginLeft: '-15px' },
        },
    },
    overlay: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 2,
    },
    buttonLink: {
        padding: '10px 20px 10px 20px',
        color: '#fff',
        backgroundColor: '#1797f2',
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: '1.75',
        borderRadius: '4px',
        letterSpacing: '0.02857em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        '&:hover': {
            transition: '0.75s',
            fontWeight: 'bold',
        },
    },
    listRequirement: {
        textAlign: 'left',
        fontSize: '16px',
        marginLeft: '2%',
        '&>li': {
            listStyleType: 'none',
            marginTop: '5px',
            paddingLeft: '1.3em',
            '&::before': {
                // content: '&#x2714;',
                content: '"✓"',
                display: 'inline-block',
                marginLeft: '-1.3em',
                width: '1.3em',
            },
        },
    },
    menuResponsiveMobileContainer: {
        '&>h3': {
            background: '#1797f2',
            textAlign: 'center',
            color: '#fff',
            textTransform: 'uppercase',
        },
    },
    menuResponsiveMobile: {
        textAlign: 'left',
        padding: '0 20px 20px 20px',
        '&>li': {
            listStyleType: 'none',
            marginTop: '5px',
            textAlign: 'justify',
            margin: '0 auto',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
    },
    menuHeader: {
        backgroundColor: '#fafafa',
        color: 'black',
        '@media (max-width: 900px)': {
            paddingLeft: 0,
        },
    },
    drawerContainer: {
        padding: '20px 20px',
        marginLeft: '-40px',
    },
    reportHaveNoRecord: {
        margin: '0 auto',
        textAlign: 'center',
        padding: '30px',
        width: '100%',
        '@media (max-width: 900px)': {
            '&>img': {
                width: '65%',
            },
            '&>h1': {
                fontSize: '15px',
            },
        },
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
