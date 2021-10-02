const SET_ITEM = 'SET_ITEM';

const addItemToCart = (totalCount) => ({
    type: SET_ITEM,
    payload: totalCount,
})