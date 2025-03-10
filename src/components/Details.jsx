import { useParams } from "react-router-dom";

function Details() {
    const { id } = useParams();

    const produit = { id, titre: `Details du Produit ${id}`, description: `Description complete du produit ${id}` };

    return (
        <div>
            <h1>{produit.titre}</h1>
            <p>{produit.description}</p>
        </div>
    );
}

export default Details;
