import { Link } from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "./CartContext.jsx";

const produits = [
    { id: 1, titre: "Produit 1" },
    { id: 2, titre: "Produit 2" },
    { id: 3, titre: "Produit 3" },
];

function Dashboard() {
    const {addToCart}=useContext(CartContext)
    return (
        <div>
            <h1>Liste des Produits</h1>
            <ul>
                {produits.map((produit) => (
                    <li key={produit.id}>
                        <h2>{produit.titre}</h2>
                        <button onClick={() => addToCart(produit)}>Add to Cart</button>
                        {/*<Link to={`/details/${produit.id}`}>
                            <button>Details</button>
                        </Link>*/}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
