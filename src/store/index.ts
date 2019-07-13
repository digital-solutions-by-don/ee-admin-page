import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import {authReducer} from "./auth/reducers";
import {messageReducer} from "./messages/reducers";

const rootReducer = combineReducers({auth: authReducer, messages: messageReducer});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middleWares = [reduxThunk, reduxLogger];
    const enhancers = applyMiddleware(...middleWares);
    return createStore(rootReducer, composeWithDevTools(enhancers));
}