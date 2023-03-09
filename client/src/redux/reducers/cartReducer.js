export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyExist = state.cartItems.find(
        (item) => item._id === action.data._id
      );
      if (alreadyExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.data._id ? action.data : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.data],
        };
      }

    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.data._id
        ),
      };

    default:
      return state;
  }
};
