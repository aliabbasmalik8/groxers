import {
    GET_PRODUCTS,
    ADD_CART,
    GET_CART_ITEMS
} from "../actions/types";
const initialState = {
   products: [],
   cart: [],
   total: 0,
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
            newCart.push(action.payload.cartItems);
            total += action.payload.cartItems.total;
            return {
                ...state,
                cart: [...newCart],
                total: total,
            }
        case GET_CART_ITEMS:
            total = 0;
            for(let i=0; i<action.payload.cartItems.length; i++){
                total += action.payload.cartItems[i].total;
            }
            return {
                ...state,
                cart: action.payload.cartItems,
                total: total,
            }
        default:
            return state;
    }
}