import { Auth } from "../interface/models";
import { ACTION } from "./actions";

type Action = { type: ACTION.USER_AUTH, payload: Auth }

interface State {
    userAuth: Auth
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
    }
}

export const eventReducer = (state: State = initState, action: Action) => {
    switch (action.type) {
        case ACTION.USER_AUTH:
            return { userAuth: action.payload }
        default:
            return state;
    }
}