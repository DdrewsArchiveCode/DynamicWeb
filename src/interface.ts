export interface user {
    UserId: Number,
    userName: String,
    password: String,
    email: String,
    active:boolean
    //session: Number //make a timeout for this
}

export interface Data {
    users: user[]
}