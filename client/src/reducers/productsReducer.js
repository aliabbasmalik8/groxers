import {
    GET_PRODUCTS,
    ADD_CART,
    GET_CART_ITEMS
} from "../actions/types";
const initialState = {
   products: [],
   cart: [],
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
            newCart.push(action.payload.cartItems);
            return {
                ...state,
                cart: [...newCart]
            }
        case GET_CART_ITEMS:
            return {
                ...state,
                cart: action.payload.cartItems
            }
        default:
            return state;
    }
}