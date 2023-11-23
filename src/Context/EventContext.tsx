import React, { createContext, useReducer } from "react";
import { Auth } from "../interface/models";
import { eventReducer, initState } from "./EventReducer";
import { ACTION } from "./actions";

export interface EventContextProps {
    auth: Auth;

    newAuth: (auth: Auth) => void;
}

export const EventCtx = createContext<EventContextProps>({} as EventContextProps)


export const EventProvider = ({children}: any) => {

    const [event, dispatch] = useReducer(eventReducer, initState)

    const newAuth = (auth: Auth) => {
        dispatch({type: ACTION.USER_AUTH, payload: auth})
    } 

    return (
        <EventCtx.Provider value={{
            auth: event.userAuth,
            newAuth,
        }}>
           {children} 
        </EventCtx.Provider>
    )
}