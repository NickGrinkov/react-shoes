const initialState = {
    item: [],
    totalCount: 0
};


export const addItemReducer = (state = initialState, action) => {
    if(action.type === 'SET_ITEM') {
        return {...state, 
            items: action.payload,
            totalCount: action.payload}
    } else {
        return state
    }
};