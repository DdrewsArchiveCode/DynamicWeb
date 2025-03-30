import validator from 'validator';
import bcrypt from "bcrypt";

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

export function hashPassword(password: string):string {
    const saltRounds = 10;
    const hash:string = bcrypt.hashSync(password, saltRounds);
    return hash;
}

export function hashVerify(currentPassword:string, inputPassword:string): boolean {
    const check:boolean = bcrypt.compareSync(currentPassword, inputPassword);
    return check;
}