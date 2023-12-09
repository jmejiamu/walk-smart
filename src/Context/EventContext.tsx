import React, { createContext, useReducer } from "react";
import { Auth, Event, EventInfo, Events, Joined, JoinedEvents, MyEvents, userForm } from "../interface/models";
import { eventReducer, initState } from "./EventReducer";
import { ACTION } from "./actions";
import { useFetcheer } from "../hook/useFetch";
import { ApiCall, localURL } from "./baseURL";

export interface EventContextProps {
    auth: Auth;
    events: Events;
    myEvents: MyEvents;
    eventInfo: EventInfo;
    joinedEvents: JoinedEvents;
    joined: Joined;

    newAuth: (authAction: string, auth: userForm) => void;
    createNewEvent: (event: Event) => void;
    joinEvent: (userId: string, eventID: string, event: Event) => void;
    joinedEvent: () => void;

    getEventByID: (eventID: string) => void;
    getMyEvents: (uuid: string) => void;
    getAllEvents: () => void;
    getJoinedEvents: (userID: string) => void;

}

export const EventCtx = createContext<EventContextProps>({} as EventContextProps)

export const EventProvider = ({ children }: any) => {

    const api = ApiCall(localURL)

    const [event, dispatch] = useReducer(eventReducer, initState)
    const { fetcheer } = useFetcheer()

    const newAuth = (authAction: string, auth: userForm) => {
        // authAction => endpoint register | signin
        fetcheer(`${api}${authAction}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(auth),
        })
            .then(data => dispatch({ type: ACTION.USER_AUTH, payload: data }))
    }

    const getEventByID = (eventID: string) => {
        fetcheer(`${api}events/event?event_id=${eventID}`)
            .then(data => dispatch({ type: ACTION.EVENT_INFO, payload: data }))
    }

    const getMyEvents = (uuid: string) => {
        fetcheer(`${api}events/all/me?user_id=${uuid}`)
            .then(data => dispatch({ type: ACTION.ALL_MY_EVENTS, payload: data }))
    }

    const getAllEvents = () => {
        fetcheer(`${api}events/all`)
            .then(data => dispatch({ type: ACTION.ALL_EVENTS, payload: data }))
    }

    const createNewEvent = (event: Event) => {
        dispatch({ type: ACTION.ADD_TO_MY_EVENTS, payload: event }) // will add new event to my events list
        dispatch({ type: ACTION.CREATE_EVENT, payload: event }) // will add mew event to a list of all events
        fetcheer(`${api}events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cache-control': 'no-cache'
            },
            body: JSON.stringify(event)
        })
    }

    const joinEvent = (userID: string, eventID: string, event: Event) => {
        // http://localhost:8080/api-v1/join?user_id=044e5c72-0e60-45ef&event_id=b4d3-beaa2f660241
        // user with id join event with id 
        fetcheer(`${api}join?user_id=${userID}&event_id=${eventID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(data => {
            if (data.joined) {
                dispatch({ type: ACTION.JOINED, payload: data })
            } else {
                dispatch({ type: ACTION.JOIN_EVENT, payload: event })
            }
        })
    }

    const joinedEvent = () => {
        dispatch({ type: ACTION.JOINED, payload: { joined: false, message: '' } })
    }

    const getJoinedEvents = (userID: string) => {
        // http://localhost:8080/api-v1/join?user_id=aa173cdc-d307-48b
        fetcheer(`${api}join?user_id=${userID}`)
            .then(data => dispatch({ type: ACTION.ALL_JOINED_EVENTS, payload: data }))
    }

    return (
        <EventCtx.Provider value={{
            auth: event.userAuth,
            events: event.events,
            myEvents: event.myEvents,
            eventInfo: event.eventInfo,
            joinedEvents: event.joinEvents,
            joined: event.joined,
            newAuth,
            getEventByID,
            getMyEvents,
            getAllEvents,
            getJoinedEvents,
            createNewEvent,
            joinEvent,
            joinedEvent,
        }}>
            {children}
        </EventCtx.Provider>
    )
}