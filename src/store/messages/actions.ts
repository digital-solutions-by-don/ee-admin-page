import {
    AddMessageActionFail,
    AddMessageActionStart,
    AddMessageActionSuccess,
    DeleteMessageActionFail,
    DeleteMessageActionStart,
    DeleteMessageActionSuccess,
    FetchAllMessagesFailAction,
    FetchAllMessagesStartAction,
    FetchAllMessagesSuccessAction,
    FetchMessagesFailAction,
    FetchMessagesStartAction,
    FetchMessagesSuccessAction,
    LogoutAction,
    Messages,
    MessageTypes,
    SendMessageBody
} from "./types";

import {eeApiWithAuth} from "../../api/api";
import {Dispatch} from "redux";

export const fetchMessages = (id: number) => async (dispatch: Dispatch) => {
    dispatch<FetchMessagesStartAction>({type: MessageTypes.FETCH_MESSAGES_START});
    try {
        const response = await eeApiWithAuth().get<Messages>(`/messages/${id}`);
        dispatch<FetchMessagesSuccessAction>({type: MessageTypes.FETCH_MESSAGES_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch<FetchMessagesFailAction>({type: MessageTypes.FETCH_MESSAGES_FAIL, payload: error.response.data})
    }
};

export const fetchAllMessages = () => async (dispatch: Dispatch) => {
    dispatch<FetchAllMessagesStartAction>({type: MessageTypes.FETCH_ALL_MESSAGES_START});
    try {
        const response = await eeApiWithAuth().get<Messages>('/messages');
        dispatch<FetchAllMessagesSuccessAction>({
            type: MessageTypes.FETCH_ALL_MESSAGES_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch<FetchAllMessagesFailAction>({type: MessageTypes.FETCH_ALL_MESSAGES_FAIL, payload: error.response.data})
    }
};

export const addMessage = (newMessage: SendMessageBody) => async (dispatch: Dispatch) => {
    dispatch<AddMessageActionStart>({type: MessageTypes.ADD_MESSAGE_START});
    try {
        const response = await eeApiWithAuth().post<Messages>('/messages', newMessage);
        dispatch<AddMessageActionSuccess>({type: MessageTypes.ADD_MESSAGE_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch<AddMessageActionFail>({type: MessageTypes.ADD_MESSAGE_FAIL, payload: error.response.data})
    }
};

export const deleteMessage = (id: number) => async (dispatch: Dispatch) => {
    dispatch<DeleteMessageActionStart>({type: MessageTypes.DELETE_MESSAGE_START});
    try {
        const response = await eeApiWithAuth().delete<Messages>(`/messages/${id}`);
        dispatch<DeleteMessageActionSuccess>({type: MessageTypes.DELETE_MESSAGE_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch<DeleteMessageActionFail>({type: MessageTypes.DELETE_MESSAGE_FAIL, payload: error.response.data})
    }
};

