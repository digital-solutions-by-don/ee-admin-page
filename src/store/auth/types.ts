export interface User {
    id?: number,
    first_name: string,
    last_name: string,
    email: string,
    iat?: Date,
    exp?: Date,
    isAdmin: boolean
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


export interface AuthState {
    user: User,
    isLoading: boolean,
    isAuth: boolean,
    errors: Error | null
}

export enum AuthTypes {
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    WELCOME_BACK
}

export interface CreateUserStartAction {
    type: typeof AuthTypes.CREATE_USER_START
}

export interface CreateUserSuccessAction {
    type: typeof AuthTypes.CREATE_USER_SUCCESS,
    payload: string
}

export interface CreateUserFailAction {
    type: typeof AuthTypes.CREATE_USER_FAIL,
    payload: Error
}

export interface LoginStartAction {
    type: typeof AuthTypes.LOGIN_START
}

export interface LoginSuccessAction {
    type: typeof AuthTypes.LOGIN_SUCCESS
    payload: string
}

export interface LoginFailAction {
    type: typeof AuthTypes.LOGIN_FAIL
    payload: Error
}

export interface LogoutAction {
    type: typeof AuthTypes.LOGOUT
}

export interface WelcomeBackAction {
    type: typeof AuthTypes.WELCOME_BACK,
    payload: string
}


export type AuthActions =
    CreateUserStartAction
    | CreateUserSuccessAction
    | CreateUserFailAction
    | LoginStartAction
    | LoginSuccessAction
    | LoginFailAction
    | LogoutAction
    | WelcomeBackAction