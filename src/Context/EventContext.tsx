import React, { createContext, useReducer } from "react";
import { Auth, Event, Events, MyEvents, userForm } from "../interface/models";
import { eventReducer, initState } from "./EventReducer";
import { ACTION } from "./actions";
import { useFetcheer } from "../hook/useFetch";
import { ApiCall, localURL } from "./baseURL";

export interface EventContextProps {
    auth: Auth;
    events: Events;
    myEvents: MyEvents;

    newAuth: (authAction: string, auth: userForm) => void;
    createNewEvent: (event: Event) => void;
    getMyEvents: (uuid: string) => void;
    getAllEvents: () => void;
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

    const getMyEvents = (uuid: string) => {
        fetcheer(`${api}events/all/me?user_id=${uuid}`)
            .then(data => dispatch({ type: ACTION.ALL_MY_EVENTS, payload: data }))
    }

    const getAllEvents = () => {
        fetcheer(`${api}events/all`)
            .then(data => dispatch({ type: ACTION.ALL_EVENTS, payload: data }))
    }

    const createNewEvent = (event: Event) => {
        dispatch({ type: ACTION.CREATE_EVENT, payload: event })
        fetcheer(`${api}events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cache-control': 'no-cache'
            },
            body: JSON.stringify(event)
        })
    }

    return (
        <EventCtx.Provider value={{
            auth: event.userAuth,
            events: event.events,
            myEvents: event.myEvents,
            newAuth,
            getMyEvents,
            getAllEvents,
            createNewEvent
        }}>
            {children}
        </EventCtx.Provider>
    )
}