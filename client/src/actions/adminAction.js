import {
    GET_ALL_USERS,
    MAKE_ADMIN,
    CHANGE_PASSWORD
} from "./types";
export function getAllUsersAction(payload){
    return {
        type: GET_ALL_USERS,
        payload,
    }
};
export function makeAdminAction(payload){
    return {
        type: MAKE_ADMIN,
        payload,
    }
};

export function changePasswordAction(payload){
    return {
        type: CHANGE_PASSWORD,
        payload,
    }
};