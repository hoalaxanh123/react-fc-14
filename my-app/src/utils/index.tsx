import { SELECTED_INDEX_QUESTION } from '../constants';

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
