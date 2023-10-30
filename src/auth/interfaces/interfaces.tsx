export interface userForm {
  fullName: string;
  email: string;
  password: string;
}

export interface apiResponse {
  error: boolean;
  record: {
    created?: string;
    fail?: boolean;
    token?: string;
  };
}
