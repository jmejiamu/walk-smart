// Auth - Register and Signin 
export interface userForm {
    fullName?: string;
    email?: string;
    password?: string;
}

export interface Auth {
    error: boolean;
    record: Record;
}

export interface Record {
    user_id: string;
    username: string;
    created: string;
    fail: boolean;
    token: string;
}
// list all events 
export interface Events {
    error: boolean;
    message: string;
    events: Event[];
}
export interface EventInfo {
    error:    boolean;
    recived:  string;
    event_id: string;
    event:    Event[];
}

export interface Event {
    event_id?: string;
    user_id?: string;
    event_title?: string;
    event_description?: string;
    latitude?: number;
    longitude?: number;
    time_stamp?: Date;
}

