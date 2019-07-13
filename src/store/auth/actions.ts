import {ThunkDispatch} from "redux-thunk";
import {Action, ActionCreator} from "redux";
import axios from 'axios';
import {
    Credentials,
    LOGIN_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAIL,
    REGISTER_START,
    REGISTER_SUCCESS,
    RegisterUser,
    WELCOME_BACK
} from "./types";

export const login = (credentials: Credentials) => async (dispatch: ThunkDispatch<{}, {}, any>) => {
    dispatch({type: LOGIN_START});
    try {
        const response = await axios.post('/auth/login', credentials);
        dispatch({type: LOGIN_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({type: LOGIN_FAIL, payload: error.response})
    }
};

export const register = (newUser: RegisterUser) => async (dispatch: ThunkDispatch<{}, {}, any>) => {
    dispatch({type: REGISTER_START});
    try {
        const response = await axios.post('/auth/register', newUser);
        dispatch({type: REGISTER_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({type: REGISTER_FAIL, payload: error.response})
    }
};

export const logout: ActionCreator<Action> = () => ({type: LOGOUT});

export const welcomeBack: ActionCreator<Action> = (token:string) => ({type: WELCOME_BACK, payload: token});
