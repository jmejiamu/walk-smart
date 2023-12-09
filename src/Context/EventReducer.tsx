import { Reducer } from "react";
import { Auth, Event, EventInfo, Events, Joined, JoinedEvents, MyEvents } from "../interface/models";
import { ACTION } from "./actions";

type Action =
    | { type: ACTION.ALL_EVENTS, payload: Events }
    | { type: ACTION.ALL_MY_EVENTS, payload: MyEvents }
    | { type: ACTION.ALL_JOINED_EVENTS, payload: JoinedEvents }
    | { type: ACTION.EVENT_INFO, payload: EventInfo }
    | { type: ACTION.CREATE_EVENT, payload: Event }
    | { type: ACTION.ADD_TO_MY_EVENTS, payload: Event }
    | { type: ACTION.USER_AUTH, payload: Auth }
    | { type: ACTION.JOIN_EVENT, payload: Event }
    | { type: ACTION.JOINED, payload: Joined }


interface State {
    userAuth: Auth;
    events: Events;
    myEvents: MyEvents;
    eventInfo: EventInfo;
    joinEvents: JoinedEvents;
    joined: Joined;
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
        myEvents: []
    },
    eventInfo: {
        error: true,
        recived: "",
        event_id: "",
        event: []
    },
    joinEvents: {
        error: true,
        recived: "",
        events: []
    },
    joined: {
        joined: false,
        message: ""
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
                eventInfo: action.payload,
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
        case ACTION.ADD_TO_MY_EVENTS:
            return {
                ...state,
                myEvents: {
                    error: false,
                    recived: '',
                    myEvents: [...state.myEvents.myEvents, action.payload]
                }
            }
        case ACTION.JOIN_EVENT:
            return {
                ...state,
                joinEvents: {
                    recived: "",
                    error: true,
                    events: [...state.joinEvents.events, action.payload]
                }
            }
        case ACTION.ALL_JOINED_EVENTS:
            return {
                ...state,
                joinEvents: action.payload
            }
        case ACTION.JOINED:
            return {
                ...state,
                joined: action.payload
            }
        default:
            return state;
    }
}