import React, { createContext, useReducer } from "react";
import { Auth, Event, Events } from "../interface/models";
import { eventReducer, initState } from "./EventReducer";
import { ACTION } from "./actions";
import { useFetcheer } from "../hook/useFetch";
import { ApiCall, localURL } from "./baseURL";

export interface EventContextProps {
    auth: Auth;
    events: Events;

    newAuth: (auth: Auth) => void;
    createNewEvent: (event: Event) => void;
    getAllEvents: () => void;
}

export const EventCtx = createContext<EventContextProps>({} as EventContextProps)

export const EventProvider = ({ children }: any) => {

    const api = ApiCall(localURL)

    const [event, dispatch] = useReducer(eventReducer, initState)


    const newAuth = (auth: Auth) => {
        dispatch({ type: ACTION.USER_AUTH, payload: auth })
    }

    const getAllEvents = () => {
        const { fetcheer } = useFetcheer()
        fetcheer(`${api}events/all`)
            .then(data => dispatch({ type: ACTION.ALL_EVENTS, payload: data }))
    }

    const createNewEvent = (event: Event) => {
        const { fetcheer } = useFetcheer()
        
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
            newAuth,
            getAllEvents,
            createNewEvent
        }}>
            {children}
        </EventCtx.Provider>
    )
}