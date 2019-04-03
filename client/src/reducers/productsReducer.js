import {
    GET_PRODUCTS,
    ADD_CART
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
            newCart.push(action.payload);
            return {
                ...state,
                cart: [...newCart]
            }
        default:
            return state;
    }
}