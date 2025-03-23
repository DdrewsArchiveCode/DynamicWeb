export interface user {
    UserId: Number,
    userName: String,
    passwordSecured: string,
    email: String,
    active:boolean,
    salt: string,
    session: string | undefined
}

export interface Data {
    users: user[]
}