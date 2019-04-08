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
            let cartItems = action.payload.cartItems;
            let index = newCart.findIndex(obj => {
                return obj.product.pid === cartItems.product.pid && obj.product.source === cartItems.product.source;
            })
            if(index !== -1){
                newCart[index].quantity += cartItems.quantity;
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
        default:
            return state;
    }
}