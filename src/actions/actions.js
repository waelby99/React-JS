export const addToCart = (produit) => ({
    type: "ADD_TO_CART",
    payload: produit,
});

export const removeFromCart = (id) => ({
    type: "REMOVE_FROM_CART",
    payload: id,
});