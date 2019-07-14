import {
    AuthTypes,
    CreateUserFailAction,
    CreateUserStartAction,
    CreateUserSuccessAction,
    Credentials,
    LoginFailAction,
    LoginStartAction,
    LoginSuccessAction,
    LogoutAction,
    RegisterUser,
    WelcomeBackAction
} from './types';
import {eeApi} from "../../api/api";
import {Dispatch} from "redux";

export const login = (credentials: Credentials) => async (dispatch: Dispatch) => {
    dispatch<LoginStartAction>({type: AuthTypes.LOGIN_START});
    try {
        const response = await eeApi().post<string>('/users/login', credentials);
        dispatch<LoginSuccessAction>({type: AuthTypes.LOGIN_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch<LoginFailAction>({type: AuthTypes.LOGIN_FAIL, payload: error.response.data})
    }
};

export const register = (newUser: RegisterUser) => async (dispatch: Dispatch) => {
    dispatch<CreateUserStartAction>({type: AuthTypes.CREATE_USER_START});
    try {
        const response = await eeApi().post<string>('/users/register', newUser);
        dispatch<CreateUserSuccessAction>({type: AuthTypes.CREATE_USER_SUCCESS, payload: response.data});
    } catch (error) {
        dispatch<CreateUserFailAction>({type: AuthTypes.CREATE_USER_FAIL, payload: error.response.data})
    }
};

export const logout = (dispatch: Dispatch) => dispatch<LogoutAction>({type: AuthTypes.LOGOUT});

export const welcomeBack = (token: string) => (dispatch: Dispatch) => dispatch<WelcomeBackAction>({
    type: AuthTypes.WELCOME_BACK,
    payload: token
});