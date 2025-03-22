import * as EmailValidator from 'email-validator';

export function passwordCheck(password: String):boolean{
    let lengthCheck: boolean = false;
    let lowerCase: boolean = false;
    let upperCase: boolean = false;
    let number: boolean= false;
    let specialChar: boolean = false;

    if (password.length > 8) {
        lengthCheck = true;
    }

    for (const char of password) {
        if (char >= 'a' && char <= 'z') {
            lowerCase = true;
        } else if (char >= 'A' && char <= 'Z') {
            upperCase = true;
        } else if (char >= '0' && char <= '9') {
            number = true;
        } else if (char )
    }

    if (lengthCheck === true && lowerCase === true && upperCase === true && number === true && specialChar === true) {
        return true;
    }
    return false;
}

export function nameCheck (name: String):boolean {
    let lengthCheck = false;

    if (name.length < 2) {
        lengthCheck = false;
    }
    
    return false;
}

export function emailCheck (email:string):boolean {
    let valid = false;
    if (EmailValidator.validate(email) === true) {
        valid = true;
    }
    return valid;
}