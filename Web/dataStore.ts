import { Data, user } from "./interface";

let data :Data = {
    users: []
}

export function getData():Data {
    return data;
}

export function setData(newData: Data) {
    data = newData;
}