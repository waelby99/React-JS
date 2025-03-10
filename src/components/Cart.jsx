import React, { useContext } from "react";
import {CartContext} from "./CartContext.jsx";
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart} from "../actions/actions.js";


function Cart() {
    //contextAPI
    //const { cart, removeFromCart } = useContext(CartContext);
    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    return (
        <div>
            {/* contextAPI <h2>Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.titre}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>*/}
            <h2>Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.titre}
                        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Cart;