const SET_FILTER = 'SET_FILTER';

export const setFilter = (index) => ({
    type: SET_FILTER,
    payload: index,
});