import { createStore, applyMiddleware } from 'redux';
import {filterReducer} from './reducers/filterReducer';
import { sortReducer } from './reducers/sortReducer';
import { sizeReducer } from './reducers/sizeReducer';
import { shoesReducer } from './reducers/shoesReducer';
import { addItemReducer } from './reducers/addItemReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    filter: filterReducer,
    size: sizeReducer,
    sort: sortReducer,
    shoes: shoesReducer,
    addItem: addItemReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;