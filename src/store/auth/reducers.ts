import {AuthActions, AuthState, User} from './types';
import jwt_decode from 'jwt-decode';

const initialState: AuthState = {
    user: {
        first_name: '',
        last_name: '',
        email: '',
        isAdmin: false
    },
    isAuth: false,
    isLoading: false,
    errors: null,
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
    switch (action.type) {
        case 'LOGIN_START':
            return {...state, isLoading: true};
        case "LOGIN_SUCCESS":
            const user: User = jwt_decode(action.payload);
            return {...state, isLoading: false, isAuth: true, user};
        case "LOGIN_FAIL":
            return {...state, isLoading: false, isAuth: false, errors: action.payload};
        case "REGISTER_START":
            return {...state, isLoading: true};
        case "REGISTER_SUCCESS":
            const newUser: User = jwt_decode(action.payload);
            return {...state, isLoading: false, isAuth: true, user: newUser};
        case "REGISTER_FAIL":
            return {...state, isLoading: false, isAuth: false, errors: action.payload};
        case "LOGOUT":
            return initialState;
        case "WELCOME_BACK":
            const returningUser: User = jwt_decode(action.payload);
            return {...state, isLoading: false, isAuth: true, user: returningUser};
        default:
            return state;
    }
}
