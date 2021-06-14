// LocalStorage key
export const LOGGED = 'logged';
export const USERNAME = 'usr';
export const ROLE = 'role';
export const ROLE_TYPE = {
    ADMIN: 'admin',
    TESTER: 'tester',
    MEMBER: 'member',
};
export const ANSWERS = 'answers';
export const ANSWERS_ACTIONS = {
    CHECK: 'check',
    UNCHECK: 'uncheck',
};

// API
export const API_URLS = {
    fetchQuestion: 'https://react14-contest-easy-quiz-app.herokuapp.com/quiz',
    fetchAnswer: 'https://react14-contest-easy-quiz-app.herokuapp.com/quiz/answer',
};

// Configs
export const SELECTED_INDEX_QUESTION = 'question_index';
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
export const MESSAGE_BAR_DURATION = 3500;

export const LINK_URL = {
    homepage: '/',
    quiz: '/quiz',
    result: '/result',
    login: '/login',
    logout: '/logout',
    management: '/management',
};

export const BTN_PREVIOUS_LABEL = 'Prev';
export const BTN_NEXT_LABEL = 'Next';
