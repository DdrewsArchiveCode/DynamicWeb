export interface user {
    UserId: Number,
    userName: String,
    passwordSecured: string,
    email: String,
    active:boolean,
    session: string | undefined
}

export interface Data {
    users: user[]
}