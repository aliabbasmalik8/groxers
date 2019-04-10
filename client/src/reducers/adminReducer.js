import {
    GET_ALL_ORDERS
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
            let newDeliverOrders = Object.assign([], state.deliverOrders);
            let newDeliveredOrders = Object.assign([], state.deliveredOrders);
            action.payload.map((order)=>{
                if(order.status === 'makeOrder'){
                    return newPendingOrders.push(order);
                }else if(order.status === 'deleverOrder'){
                    return newDeliverOrders.push(order);
                }else if(order.status === 'deleveredOrder'){
                    return newDeliveredOrders.push(order);
                }else{
                    return '';
                }
            })            
            return { 
                ...state,
                pendingOrders: [...newPendingOrders],
                deliverOrders: [...newDeliverOrders],
                deliveredOrders: [...newDeliveredOrders],
            }
        default:
            return state;
    }
}