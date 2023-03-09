export const orderReducer = (state = { success: false }, action) => {
  switch (action.type) {
    case "PLACE_ORDER_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "PLACE_ORDER_SUCCESS":
      return {
        loading: false,
        success: action.data,
      };
    case "PLACE_ORDER_FAILED":
      return {
        loading: false,
        error: action.data,
      };
    default:
      return state;
  }
};

export const userOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "GET_ORDER_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_ORDER_SUCCESS":
      return {
        loading: false,
        orders: action.data,
      };
    case "GET_ORDER_FAILED":
      return {
        loading: false,
        error: action.data,
      };
    default:
      return state;
  }
};
