import { Data, user } from "./interface";
import { getData, setData } from "./dataStore";
import {nameCheck, emailCheck, passwordCheck} from "./other.ts"

export function register(userName: string, email: string, password: string) {
    const data: Data = getData();
    const uNameValid = nameCheck(userName);
    const emailValid = emailCheck(email);
    const passwordValid = passwordCheck(password);

    if (uNameValid === false) {
        throw new Error('Invalid User Name Format');
    } 

    if (emailValid === false) {
        throw new Error('Invalid Email Format');
    }

    if (passwordValid === false) {
        throw new Error('Invalid Password Format');
    }

    const userId: number = data.users.length + 10002;
    const user: user = {
        UserId: userId,
        name: userName,
        email: email,
        password: password
    }
    return 0;
}

function login(email: string, password: string) {}