import {
    GET_PRODUCTS,
    ADD_CART,
    GET_CART_ITEMS,
    REMOVE_CART_ITEM,
    MAKE_ORDER,
    GET_ORDERS,
    COMPLETE_ORDER
} from "../actions/types";
const initialState = {
   products: [],
   cart: [],
   total: 0,
   pendingOrder: [],
   deliverOrder: [],
   deliveredOrder: [],
};
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
            ...state,
            products: action.payload
            };
        case ADD_CART:
            let newCart = Object.assign([], state.cart);
            let total = state.total;
            let cartItems = action.payload.cartItems;
            let index = newCart.findIndex(obj => {
                return obj.product.pid === cartItems.product.pid && obj.product.source === cartItems.product.source;
            })
            if(index !== -1){
                newCart[index].quantity += cartItems.quantity;
                newCart[index].total += cartItems.total;
            }else{
                newCart.push(cartItems);
            }
            total += cartItems.total;
            return {
                ...state,
                cart: [...newCart],
                total: total,
            }
        case GET_CART_ITEMS:
            total = 0;
            let data = [];
            if(action.payload && action.payload.cartItems){
                for(let i=0; i<action.payload.cartItems.length; i++){
                    total += action.payload.cartItems[i].total;
                }
                data = action.payload.cartItems;
            }
            return {
                ...state,
                cart: data,
                total: total,
            }
        case REMOVE_CART_ITEM:
            newCart = Object.assign([], state.cart);
            total = state.total;
            cartItems = action.payload.cartItems;
            index = newCart.findIndex(obj => {
                return obj.product.pid === cartItems.product.pid && obj.product.source === cartItems.product.source;
            })
            if(index !== -1){
                newCart.splice(index,1);
            }
            total -= cartItems.total;
            return {
                ...state,
                cart: [...newCart],
                total: total,
            }
        case MAKE_ORDER:
            let pendingOrder = Object.assign([], state.pendingOrder);
            pendingOrder.push(action.payload)
            return {
                ...state,
                cart: [],
                pendingOrder: [...pendingOrder],
            }
        case GET_ORDERS:
            pendingOrder = Object.assign([], state.pendingOrder);
            let deliverOrder = Object.assign([], state.pendingOrder);
            let deliveredOrder = Object.assign([], state.pendingOrder);
            action.payload.map(order=>{
                if(order.status === "makeOrder"){
                    pendingOrder.push(order);
                }else if(order.status === "deleverOrder"){
                    deliverOrder.push(order)
                }else if(order.status === "completeOrder"){
                    deliveredOrder.push(order);
                }
            })
            return {
                ...state,
                cart: [],
                pendingOrder: [...pendingOrder],
                deliverOrder: [...deliverOrder],
                deliveredOrder: [...deliveredOrder]
            }
        case COMPLETE_ORDER:
            return state;
        default:
            return state;
    }
}