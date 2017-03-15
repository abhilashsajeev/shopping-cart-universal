import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './reducers';
import {getAllProducts} from './actions'
import thunk from 'redux-thunk'


export const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(getAllProducts());


console.log(store.getState());