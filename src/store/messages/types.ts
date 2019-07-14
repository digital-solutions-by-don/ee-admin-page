interface Message {
    id: number,
    creator_id: number,
    message_subject: string,
    message_body: string,
    created_at: Date
}

export interface SendMessageBody {
    creator_id: number,
    message_subject: string,
    message_body: string,
}

export type Messages = Array<Message>;

export interface Error {
    subject_subject?: string
    message_body?: string
}

export interface MessageState {
    messages: Messages,
    isLoading: Boolean,
    errors: Error | null
}

export enum MessageTypes {
    FETCH_MESSAGES_START,
    FETCH_MESSAGES_FAIL,
    FETCH_MESSAGES_SUCCESS,
    FETCH_ALL_MESSAGES_START,
    FETCH_ALL_MESSAGES_SUCCESS,
    FETCH_ALL_MESSAGES_FAIL,
    LOGOUT,
    ADD_MESSAGE_START,
    ADD_MESSAGE_SUCCESS,
    ADD_MESSAGE_FAIL,
    DELETE_MESSAGE_START,
    DELETE_MESSAGE_SUCCESS,
    DELETE_MESSAGE_FAIL,
}

export interface FetchMessagesStartAction {
    type: typeof MessageTypes.FETCH_MESSAGES_START
}

export interface FetchMessagesSuccessAction {
    type: typeof MessageTypes.FETCH_MESSAGES_SUCCESS,
    payload: Messages
}

export interface FetchMessagesFailAction {
    type: typeof MessageTypes.FETCH_MESSAGES_FAIL,
    payload: Error
}

export interface FetchAllMessagesStartAction {
    type: typeof MessageTypes.FETCH_ALL_MESSAGES_START
}

export interface FetchAllMessagesSuccessAction {
    type: typeof MessageTypes.FETCH_ALL_MESSAGES_SUCCESS,
    payload: Messages
}

export interface FetchAllMessagesFailAction {
    type: typeof MessageTypes.FETCH_ALL_MESSAGES_FAIL,
    payload: Error
}

export interface LogoutAction {
    type: typeof MessageTypes.LOGOUT
}

export interface AddMessageActionStart {
    type: typeof MessageTypes.ADD_MESSAGE_START
}

export interface AddMessageActionSuccess {
    type: typeof MessageTypes.ADD_MESSAGE_SUCCESS,
    payload: Messages
}

export interface AddMessageActionFail {
    type: typeof MessageTypes.ADD_MESSAGE_FAIL,
    payload: Error
}

export interface DeleteMessageActionStart {
    type: typeof MessageTypes.DELETE_MESSAGE_START
}

export interface DeleteMessageActionSuccess {
    type: typeof MessageTypes.DELETE_MESSAGE_SUCCESS,
    payload: Messages
}

export interface DeleteMessageActionFail {
    type: typeof MessageTypes.DELETE_MESSAGE_FAIL,
    payload: Error
}

export type MessageActions =
    FetchMessagesFailAction
    | FetchMessagesStartAction
    | FetchMessagesSuccessAction
    | FetchAllMessagesStartAction
    | FetchAllMessagesSuccessAction
    | FetchAllMessagesFailAction
    | LogoutAction
    | AddMessageActionStart
    | AddMessageActionFail
    | AddMessageActionSuccess
    | DeleteMessageActionStart
    | DeleteMessageActionSuccess
    | DeleteMessageActionFail