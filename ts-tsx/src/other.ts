import validator from 'validator';
import argon2 from 'argon2';

export function checkName (name: string): Boolean {
    let lengthCheck = false;

    if (name.length < 2) {
        lengthCheck = true;
    }
    return lengthCheck;
}

export function checkEmail (email: string):boolean {
    let emailCheck = false;
    if (validator.isEmail(email) === true) {
        emailCheck = true;
    }
    return emailCheck;
}

export function checkPassword (password: string):boolean {
    let upperCase = false;
    let lowerCase = false;
    let number = false;
    let specialChar = false;
    const specialCharRegex = /[~!@#$%^&*]/;

    if (password.length < 8) {
        return false;
    }

    for (const word of password) {
        if (word >= 'a' && word <= 'z') {
            lowerCase = true;
        }

        if (word >= 'A' && word <= 'Z') {
            upperCase = true;
        }

        if (word >= '0' && word <= '9') {
            number = true;
        }

        if (specialCharRegex.test(word) === true) {
            specialChar = true;
        } 
    }
    
    if (upperCase === true && lowerCase === true && number === true && specialChar === true) {
        return true;
    }
    return false;
}

export async function hashPassword(password: string):Promise<string> {
    const hash:string = await argon2.hash(password, {type:argon2.argon2id});
    return hash;
}

export async function hashVerify(currentPassword:string, inputPassword:string): Promise<boolean> {
    const check:boolean = await argon2.verify(currentPassword, inputPassword);
    return check;
}