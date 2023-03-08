import axios from "axios";

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser = getState().registerReducer.currentUser;
  const cartItems = getState().cartReducer.cartItems;
  try {
    const response = await axios.post("/api/orders/placeorder/", {
      token,
      subtotal,
      currentUser,
      cartItems,
    });
    console.log("response success", response);
    dispatch({ type: "PLACE_ORDER_SUCCESS", data: response.data });
  } catch (error) {
    console.log("response error", error);
    dispatch({ type: "PLACE_ORDER_FAILED", data: error });
  }
};
