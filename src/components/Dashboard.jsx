import { Link } from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "./CartContext.jsx";
import {useDispatch} from "react-redux";
import {addToCart} from "../actions/actions.js";

const produits = [
    { id: 1, titre: "Produit 1" },
    { id: 2, titre: "Produit 2" },
    { id: 3, titre: "Produit 3" },
];

function Dashboard() {
    //contextAPI
    //const {addToCart}=useContext(CartContext)
    const dispatch = useDispatch();
    return (
        <div>
            {/*context api <h1>Liste des Produits</h1>
            <ul>
                {produits.map((produit) => (
                    <li key={produit.id}>
                        <h2>{produit.titre}</h2>
                        <button onClick={() => addToCart(produit)}>Add to Cart</button>
                        <Link to={`/details/${produit.id}`}>
                            <button>Details</button>
                        </Link>
                    </li>
                ))}
            </ul>*/}
            <h2>Products</h2>
            <ul>
                {produits.map((produit) => (
                    <li key={produit.id}>
                        {produit.titre}
                        <button onClick={() => dispatch(addToCart(produit))}>Add to Cart</button>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Dashboard;
