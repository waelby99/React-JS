import React from "react";
import { useSelector } from "react-redux";

function Navbar() {
    const cart = useSelector((state) => state.cart);
    return (
        <nav>
            <h1>My E-commerce App</h1>
            <p>Cart Items: {cart.length}</p>
        </nav>
    );
}
export default Navbar;