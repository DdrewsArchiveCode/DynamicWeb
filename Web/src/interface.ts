export interface user {
    UserId: Number,
    userName: String,
    passwordSecured: Promise<{hash:string}>,
    email: String,
    active:boolean,
    salt: string,
    session: number|undefined
}

export interface Data {
    users: user[]
}