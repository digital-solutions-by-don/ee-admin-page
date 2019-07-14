import {AuthActions, AuthState, AuthTypes, User} from './types';
import jwt_decode from 'jwt-decode';

const initialState: AuthState = {
    user: {
        first_name: '',
        last_name: '',
        email: '',
        isAdmin: false
    },
    isLoading: false,
    isAuth: false,
    errors: null
};

export const authReducer = (state = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case AuthTypes.LOGIN_START:
            return {...state, isLoading: true, errors: null};
        case AuthTypes.LOGIN_SUCCESS:
            const user: User = jwt_decode(action.payload);
            return {...state, isLoading: false, isAuth: true, user};
        case AuthTypes.LOGIN_FAIL:
            return {...state, isLoading: false, isAuth: false, errors: action.payload};
        case AuthTypes.CREATE_USER_START:
            return {...state, isLoading: true, errors: null};
        case AuthTypes.CREATE_USER_SUCCESS:
            const newUser: User = jwt_decode(action.payload);
            return {...state, isLoading: false, isAuth: true, user: newUser};
        case AuthTypes.CREATE_USER_FAIL:
            return {...state, isLoading: false, isAuth: false, errors: action.payload};
        case AuthTypes.LOGOUT:
            return initialState;
        case AuthTypes.WELCOME_BACK:
            const returningUser: User = jwt_decode(action.payload);
            return {...state, isLoading: false, isAuth: true, user: returningUser};
        default:
            return state;
    }

};
