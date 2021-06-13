export const LOGGED = 'logged';
export const USERNAME = 'usr';
export const ROLE = 'role';
export const ROLE_TYPE = {
    ADMIN: 'admin',
    TESTER: 'tester',
    MEMBER: 'member',
};
export const PAGE_TITLE = 'Quiz App';
export const SEPARATOR = ' - ';
const getTitle = (shortTitle) => {
    return PAGE_TITLE + SEPARATOR + shortTitle;
};
export const PAGE_TITLES = {
    home: PAGE_TITLE,
    quiz: getTitle('Quiz challenge'),
    result: getTitle('Report'),
    management: getTitle('Management'),
    login: getTitle('Login'),
    403: getTitle('Forbidden'),
    404: getTitle('Not found'),
};
export const MESSAGE_BAR_DURATION = 3000;

export const LINK_URL = {
    homepage: '/',
    quiz: '/quiz',
    result: '/result',
    login: '/login',
    logout: '/logout',
    management: '/management',
};
