import { Data } from "./interface";

let data: Data = {
    users: []
}

export function getData() {
    return data;
}

export function setData(newData: Data) {
    data = newData;
}