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
