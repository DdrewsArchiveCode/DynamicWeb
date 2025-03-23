import { user, Data } from "./interface";
import { getData, setData } from "./dataStore";
import { checkEmail, checkName, checkPassword, hashPassword, hashVerify } from "./other";
import crypto from 'crypto';
import {v4} from 'uuid';

export function register(userName: string, email: string, password: string) {
    const data: Data = getData();
    const passwordCheck = checkPassword(password);
    const nameCheck = checkName(userName);
    const emailCheck = checkEmail(email);

    if (passwordCheck === false) {
        return {error: "Invalid password format"};
    }

    if (nameCheck === false) {
        return { error: 'Invalid name format'};
    }

    if (emailCheck === false) {
        return {error: 'Invalid email format'};
    }

    const userId: number = data.users.length + 10001;
    const salt: string = crypto.randomBytes(16).toString("hex");
    const saltedPassword:string = salt + password;
    const hashedPassword:string = JSON.parse(hashPassword(saltedPassword).toString());

    const user: user = {
        UserId: userId,
        userName: userName,
        email: email,
        passwordSecured: hashedPassword,
        active: false,
        salt: salt,
        session: undefined
    }
    data.users.push(user);
    setData(data);

    return "Your account have been registered succesfully!";
}

export function login(userId: number, password: string) {
    const data: Data = getData();
    const user:user | undefined = data.users.find(user => user.UserId === userId);
    if (user == undefined) {
        return {error: "User haven't been registered or incorrect userId"};
    }
    const newPassword:string = user.salt + password;
    const hashedPassword: string = JSON.parse(hashPassword(newPassword).toString());
    const verifyPass: boolean = JSON.parse(hashVerify(user.passwordSecured, hashedPassword).toString());
    if (verifyPass === false) {
        return {error: "The given password does not match"};
    }
    user.active = true;
    user.session = v4();
    data.users.push(user);
    setData(data);
    return "Login succesfull!";
}

export function detailsUpdate(userId: number, email:string, password:string) {}

export function passwordUpdate(userId:number, oldPassword: string, newPassword: string) {}

export function userDetails(userId:number) {}