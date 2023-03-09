import axios from "axios";

export const addToCart =
  (pizza, quantity, variant) => async (dispatch, getState) => {
    var cartItem = {
      name: pizza.name,
      _id: pizza._id,
      image: pizza.image,
      variant: variant,
      quantity: quantity,
      prices: pizza.prices,
      price: pizza.prices[0][variant] * quantity,
    };

    dispatch({ type: "ADD_TO_CART", data: cartItem });

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

export const deleteFromCart = (pizza) => async (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", data: pizza });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
