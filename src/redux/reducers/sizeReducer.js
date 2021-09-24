const initialState = {
    sizes: [],
    active: 1,
}

export const sizeReducer = (state = initialState, action) => {
    if(action.type === 'SET_SIZE') {
        return {...state, active: action.payload}
    } else {
        return state;
    }
};
