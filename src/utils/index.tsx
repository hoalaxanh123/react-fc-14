/* eslint-disable @typescript-eslint/no-explicit-any */
import { ANSWERS, QUESTIONS, RESULT_DATA, SELECTED_INDEX_QUESTION } from '../constants';

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
export const setUserAnswerCheckbox = (questID: number, answer: string, value: boolean): any => {
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
export const setUserAnswerRadio = (questID: number, answer: string): any => {
    const answersObj = getUserAnswers();
    answersObj[questID] = answer;
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

export const isEligibleForSubmit = (questionFetchedLength: number): boolean => {
    const userAnswers = getUserAnswers();
    if (Object.keys(userAnswers).length !== questionFetchedLength) {
        return false;
    }
    for (const key of Object.keys(userAnswers)) {
        if (userAnswers[key].length === 0) {
            return false;
        }
    }

    return true;
};
export const getAnswerIndexes = (): Array<number> => {
    const answers = getUserAnswers();
    const result = [];
    for (const key of Object.keys(answers)) {
        if (answers[key].length !== 0) {
            result.push(key);
        }
    }
    return result;
};
export const clearAnswers = (): void => {
    localStorage.removeItem(SELECTED_INDEX_QUESTION);
    localStorage.removeItem(ANSWERS);
    localStorage.removeItem(QUESTIONS);
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const saveQuestion = (questions: any): void => {
    try {
        localStorage.setItem(QUESTIONS, JSON.stringify(questions));
    } catch (error) {
        saveQuestion({});
    }
};

export const getQuestions = (): any => {
    try {
        return JSON.parse(localStorage.getItem(QUESTIONS)) || [];
    } catch (error) {
        saveQuestion({});
    }
};

export const preparePayloadForCheckAnswers = (): any => {
    const answers = getReportData()?.answers || [];
    let result = {};
    const listAnswer = [];
    Object.keys(answers).forEach((key) => {
        listAnswer.push({
            id: key,
            choice: answers[key].toString(),
        });
    });
    result = { listAnswer: listAnswer };
    return result;
};
export const randomSortArr = (inputArr: Array<any>): Array<any> => {
    try {
        return inputArr.sort(() => Math.random() - 0.5);
    } catch (err) {
        return inputArr;
    }
};

export const saveReportData = (): any => {
    const answers = getUserAnswers();
    const questions = getQuestions();
    const answersIndexes = getAnswerIndexes();
    const date = new Date().toLocaleString();
    localStorage.setItem(
        RESULT_DATA,
        JSON.stringify({
            answers: answers,
            questions: questions,
            answersIndexes: answersIndexes,
            date: date,
        }),
    );
};

export const getReportData = (): any => {
    return JSON.parse(localStorage.getItem(RESULT_DATA)) || null;
};
