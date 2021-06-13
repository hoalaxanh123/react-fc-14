export const LOGGED = 'logged';
export const USERNAME = 'usr';
export const ROLE = 'role';
export const MESSAGE_BAR_DURATION = 3000;

export const LINK_URL = {
    homepage: '/',
    about: '/about',
    contact: '/contact',
    management: '/management',
    login: '/login',
    logout: '/logout',
};

export const TIERS = [
    {
        title: 'Free',
        price: '0',
        description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
    {
        title: 'Pro',
        subheader: 'Most popular',
        price: '15',
        description: ['20 users included', '10 GB of storage', 'Help center access', 'Priority email support'],
        buttonText: 'Get started',
        buttonVariant: 'contained',
    },
    {
        title: 'Enterprise',
        price: '30',
        description: ['50 users included', '30 GB of storage', 'Help center access', 'Phone & email support'],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
];
