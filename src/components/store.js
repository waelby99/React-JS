import { createStore } from "redux";

const initialState = {
    cart: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, action.payload] };
        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) };
        default:
            return state;
    }
}

const store = createStore(rootReducer);
export default store;