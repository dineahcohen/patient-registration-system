import { createStoreHook, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const reducer = combineReducers({
    //will container reducers
});

const initialState = {};

const middleware = [think];

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;