import React, { useContext } from "react";
import {CartContext} from "./CartContext.jsx";


function Cart() {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.titre}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Cart;