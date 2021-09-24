const initialState = {
    shoes: []
}

export const shoesReducer = (state = initialState, action) => {
    if(action.type === 'SET_SHOES') {
        return {...state, shoes: action.payload}
    } else {
        return state
    }
};