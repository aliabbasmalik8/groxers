import {
    GET_ALL_ORDERS,
    DELIVER_ORDER,
    ADMIN_DELIVER_ORDERS,
    ADMIN_COMPLETED_ORDERS
} from "../actions/types";
const initialState = {
    pendingOrders: [],
    deliverOrders: [],
    deliveredOrders: [],
    users: [],
};
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ORDERS:
            let newPendingOrders = Object.assign([], state.pendingOrders);
            newPendingOrders = newPendingOrders.concat(action.payload);
            return { 
                ...state,
                pendingOrders: [...newPendingOrders],
            }
        case DELIVER_ORDER:
            let newDeliverOrders = Object.assign([], state.deliverOrders);
            newPendingOrders = Object.assign([], state.pendingOrders);
            let index = newPendingOrders.findIndex(index => index._id === action.payload._id);
            if(index !== -1){
                newPendingOrders.splice(index,1);
            }
            newDeliverOrders.push(action.payload);
            return { 
                ...state,
                pendingOrders: [...newPendingOrders],
                deliverOrders: [...newDeliverOrders]
            }
        case ADMIN_DELIVER_ORDERS:
            // newDeliverOrders = Object.assign([], state.deliverOrders);
            // newDeliverOrders = newDeliverOrders.concat(action.payload);
            return { 
                ...state,
                deliverOrders: [...action.payload],
            }
        case ADMIN_COMPLETED_ORDERS:
            // let newDeliveredOrders = Object.assign([], state.deliveredOrders);
            // newDeliveredOrders = newDeliveredOrders.concat(action.payload);
            return { 
                ...state,
                deliveredOrders: [...action.payload],
            }
        default:
            return state;
    }
}