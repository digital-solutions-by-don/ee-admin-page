export interface User {
    id?: number,
    first_name: string,
    last_name: string,
    email: string,
    iat?: Date,
    exp?: Date
}

export interface Credentials {
    email: string,
    password: string
}

export interface RegisterUser {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    password2: string,
}

export interface Error {
    first_name?: string,
    last_name?: string,
    email?: string,
    password?: string,
    password2?: string
}

interface token {
    token: string
}

export interface AuthState {
    user: User,
    isLoading: boolean,
    isAuth: boolean,
    isAdmin: boolean,
    errors: Error
}

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGOUT = 'LOGOUT';
export const WELCOME_BACK = 'WELCOME_BACK';

interface LoginStartAction {
    type: typeof LOGIN_START
}

interface LoginSuccessAction {
    type: typeof LOGIN_SUCCESS,
    payload: token
}

interface LoginFailAction {
    type: typeof LOGIN_FAIL,
    payload: Error
}

interface RegisterStartAction {
    type: typeof REGISTER_START
}

interface RegisterSuccessAction {
    type: typeof REGISTER_SUCCESS,
    payload: token
}

interface RegisterFailAction {
    type: typeof REGISTER_FAIL,
    payload: Error
}

interface LogoutAction {
    type: typeof LOGOUT
}

interface WelcomeBackAction {
    type: typeof WELCOME_BACK
}

export type AuthActions =
    LoginStartAction
    | LoginSuccessAction
    | LoginFailAction
    | RegisterStartAction
    | RegisterSuccessAction
    | RegisterFailAction
    | LogoutAction
    | WelcomeBackAction