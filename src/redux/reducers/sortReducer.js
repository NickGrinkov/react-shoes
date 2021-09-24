const initialState = {
    sortBy: 'popular',
}

export const sortReducer = (state = initialState, action) => {
    if(action.type === 'SET_SORT_BY') {
        return {...state, sortBy: action.payload}
    } else {
        return state;
    }
};

