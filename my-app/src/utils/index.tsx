import { ANSWERS, SELECTED_INDEX_QUESTION } from '../constants';

export const getCurrentIndexQuestion = (): number => {
    const index = localStorage.getItem(SELECTED_INDEX_QUESTION);
    if (!index) {
        setIndexQuestion(0);
        return 0;
    }
    return Number(index);
};
export const setIndexQuestion = (index: number): void => {
    localStorage.setItem(SELECTED_INDEX_QUESTION, index.toString());
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setUserAnswer = (questID: number, answer: string, value: boolean): any => {
    const answersObj = getUserAnswers();
    const listQuestID = Object.keys(answersObj);
    if (listQuestID.includes(questID.toString())) {
        if (answersObj[questID].includes(answer) && !value) {
            const thisAnswers = answersObj[questID];
            const index = thisAnswers.indexOf(answer);
            thisAnswers.splice(index, 1);
            answersObj[questID] = thisAnswers;
        } else {
            answersObj[questID].push(answer);
        }
    } else {
        answersObj[questID] = value ? [answer] : [];
    }
    localStorage.setItem(ANSWERS, JSON.stringify(answersObj));
    return answersObj;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUserAnswers = (): any => {
    const answers = localStorage.getItem(ANSWERS);
    if (!answers) {
        localStorage.setItem(ANSWERS, JSON.stringify({}));
        return {};
    }
    return JSON.parse(answers);
};
