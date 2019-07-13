interface MessageObject {
    id: number,
    user_id: number,
    subject: string,
    message: string,
    createdAt: Date
}

type Messages = Array<MessageObject>;

interface Error {
    subject?: string
    message?: string
}

export interface MessageState {
    messages: Messages,
    isLoading: Boolean,
    errors: Error | null
}

const FETCH_MESSAGES_START = 'FETCH_MESSAGES_START';
const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
const FETCH_MESSAGES_FAIL = 'FETCH_MESSAGES_FAIL';
const FETCH_ALL_MESSAGES_START = 'FETCH_ALL_MESSAGES_START';
const FETCH_ALL_MESSAGES_SUCCESS = 'FETCH_ALL_MESSAGES_SUCCESS';
const FETCH_ALL_MESSAGES_FAIL = 'FETCH_ALL_MESSAGES_FAIL';
const LOGOUT = 'LOGOUT';

interface FetchMessagesStartAction {
    type: typeof FETCH_MESSAGES_START
}

interface FetchMessagesSuccessAction {
    type: typeof FETCH_MESSAGES_SUCCESS,
    payload: Messages
}

interface FetchMessagesFailAction {
    type: typeof FETCH_MESSAGES_FAIL,
    payload: Error
}

interface FetchAllMessagesStartAction {
    type: typeof FETCH_ALL_MESSAGES_START
}

interface FetchAllMessagesSuccessAction {
    type: typeof FETCH_ALL_MESSAGES_SUCCESS,
    payload: Messages
}

interface FetchAllMessagesFailAction {
    type: typeof FETCH_ALL_MESSAGES_FAIL,
    payload: Error
}

interface LogoutAction {
    type: typeof LOGOUT
}

export type MessageActions =
    FetchMessagesFailAction
    | FetchMessagesStartAction
    | FetchMessagesSuccessAction
    | FetchAllMessagesStartAction
    | FetchAllMessagesSuccessAction
    | FetchAllMessagesFailAction | LogoutAction