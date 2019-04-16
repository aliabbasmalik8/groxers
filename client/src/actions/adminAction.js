import {
    GET_ALL_USERS,
    MAKE_ADMIN,
    CHANGE_PASSWORD,
    REMOVE_ADMIN
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
export const removeAdminAction = (payload) =>{
    return {
        type: REMOVE_ADMIN,
        payload,
    }
}