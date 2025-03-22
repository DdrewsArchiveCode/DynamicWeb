import { user, Data } from "./interface";
import { getData, setData } from "./dataStore";
import { checkEmail, checkName, checkPassword } from "./other";

export function register(userName: string, email: string, password: string) {
    const data: Data = getData();
    const passwordCheck = checkPassword(password);
    const nameCheck = checkName(userName);
    const emailCheck = checkEmail(email);

    if (passwordCheck === false) {
        throw new Error("Invalid password format");
    }

    if (nameCheck === false) {
        throw new Error('Invalid name format');
    }

    if (emailCheck === false) {
        throw new Error('Invalid email format');
    }

    const userId: number = data.users.length + 10001;
    const user: user = {
        UserId: userId,
        userName: userName,
        email: email,
        password: password,
        active: true,
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
        throw new Error("User haven't been registered or incorrect userId");
    }
    if (user.password != password) {
        throw new Error("The given password does not match");
    }

    if (user != undefined && user.password === password) {
        user.active = true;
        user.session = 1;
    } 

}

export function detailsUpdate(userId: number, email:string, password:string) {}

export function passwordUpdate(userId:number, oldPassword: string, newPassword: string) {}

export function userDetails(userId:number) {}