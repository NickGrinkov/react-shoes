const defaultState = {
    category: null,
}


export const filterReducer = (state = defaultState, action) => {
    if(action.type === 'SET_FILTER') {
        return {...state, category: action.payload}
    } else {
        return state;
    }
};

