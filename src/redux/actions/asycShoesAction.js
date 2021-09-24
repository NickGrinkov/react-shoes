export const fetchShoes = (sortBy, category) => (dispatch) => {
    fetch(`/shoes?${category !== null ? `category=${category}` : ''
        }&_sort=${sortBy}&_order=asc`)
    .then((response) => response.json())
    .then((json) => dispatch(setShoes(json)));
};

export const setShoes = (shoes) => ({
    type: 'SET_SHOES',
    payload: shoes,
});
