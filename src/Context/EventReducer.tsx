import { Reducer } from "react";
import { Auth, Event, EventInfo, Events, MyEvents } from "../interface/models";
import { ACTION } from "./actions";

type Action =
    | { type: ACTION.ALL_EVENTS, payload: Events }
    | { type: ACTION.ALL_MY_EVENTS, payload: MyEvents }
    | { type: ACTION.EVENT_INFO, payload: EventInfo }
    | { type: ACTION.CREATE_EVENT, payload: Event }
    | { type: ACTION.USER_AUTH, payload: Auth }


interface State {
    userAuth: Auth;
    events: Events;
    myEvents: MyEvents;
    eventInfo : EventInfo;
}

export const initState: State = {
    userAuth: {
        error: false,
        record: {
            user_id: "",
            username: "",
            created: "",
            fail: false,
            token: ""
        }
    },
    events: {
        error: false,
        message: '',
        events: []
    },
    myEvents: {
        error: false,
        recived: "",
        user_id: "",
        myEvents: []
    },
    eventInfo : {
        error: true,
        recived: "no data",
        event_id: "",
        event: []
    }
}

export const eventReducer: Reducer<State, Action> = (state: State = initState, action: Action) => {
    switch (action.type) {
        case ACTION.USER_AUTH:
            return { ...state, userAuth: action.payload }
        case ACTION.ALL_EVENTS:

            return {
                ...state,
                events: action.payload
            }
        case ACTION.ALL_MY_EVENTS:
            return {
                ...state,
                myEvents: action.payload
            }
        case ACTION.EVENT_INFO: 
            return {
                ...state,
                eventInfo : action.payload,
            }
        case ACTION.CREATE_EVENT:
            return {
                ...state,
                events: {
                    error: false,
                    message: 'New Event Created', // OR empty,
                    events: [...state.events.events, action.payload]
                }
            }
        default:
            return state;
    }
}