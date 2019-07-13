import { AuthActions, AuthState } from './types';

const initialState: AuthState = {
	user: {
		first_name: '',
		last_name: '',
		email: '',
	},
	isAuth: false,
	isAdmin: false,
	isLoading: false,
	errors: {},
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
	switch (action.type) {
		case 'LOGIN_START':
			return { ...state, isLoading: true };
		default:
			return state;
	}
}
