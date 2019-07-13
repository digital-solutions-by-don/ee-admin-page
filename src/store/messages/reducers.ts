import {MessageActions, MessageState} from "./types";


const initialState: MessageState = {
    messages: [],
    isLoading: false,
    errors: null
}

export const messageReducer = (state = initialState, action: MessageActions) : MessageState => {
    switch (action.type) {
        case "FETCH_ALL_MESSAGES_START": {
            return {...state, isLoading: true}
        }
        default:
            return state;
    }
}