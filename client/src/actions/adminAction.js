import {
    GET_ALL_USERS
} from "./types";
export function getAllUsersAction(payload){
    return {
        type: GET_ALL_USERS,
        payload,
    }
};