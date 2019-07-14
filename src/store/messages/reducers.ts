import {MessageActions, MessageState, MessageTypes} from "./types";

const initialState: MessageState = {
    messages: [],
    isLoading: false,
    errors: null
};

export const messageReducer = (state = initialState, action: MessageActions): MessageState => {
    switch (action.type) {
        case MessageTypes.FETCH_MESSAGES_START:
            return {...state, isLoading: true, errors: null};
        case MessageTypes.FETCH_MESSAGES_SUCCESS:
            return {...state, isLoading: false, messages: action.payload};
        case MessageTypes.FETCH_MESSAGES_FAIL:
            return {...state, isLoading: false, messages: [], errors: action.payload};
        case MessageTypes.FETCH_ALL_MESSAGES_START:
            return {...state, isLoading: true, errors: null};
        case MessageTypes.FETCH_ALL_MESSAGES_SUCCESS:
            return {...state, isLoading: false, messages: action.payload};
        case MessageTypes.FETCH_ALL_MESSAGES_FAIL:
            return {...state, isLoading: false, messages: [], errors: action.payload};
        case MessageTypes.ADD_MESSAGE_START:
            return {...state, isLoading: true, errors: null};
        case MessageTypes.ADD_MESSAGE_SUCCESS:
            return {...state, isLoading: false, messages: action.payload};
        case MessageTypes.ADD_MESSAGE_FAIL:
            return {...state, isLoading: false, messages: [], errors: action.payload};
        case MessageTypes.DELETE_MESSAGE_START:
            return {...state, isLoading: true, errors: null};
        case MessageTypes.DELETE_MESSAGE_SUCCESS:
            return {...state, isLoading: false, messages: action.payload};
        case MessageTypes.DELETE_MESSAGE_FAIL:
            return {...state, isLoading: false, messages: [], errors: action.payload};
        case MessageTypes.LOGOUT:
            return initialState;
        default:
            return state;
    }
};