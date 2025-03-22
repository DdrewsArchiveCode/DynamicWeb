export interface user {
    UserId: Number,
    userName: String,
    password: String,
    email: String,
    active:boolean
    session: number|undefined
}

export interface Data {
    users: user[]
}