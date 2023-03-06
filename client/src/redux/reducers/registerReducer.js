export const registerReducer = (
  state = { success: false, error: false },
  action
) => {
  switch (action.type) {
    case "POST_REGISTER_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "POST_REGISTER_SUCCESS":
      return {
        loading: false,
        success: action.data,
      };
    case "POST_REGISTER_FAILED":
      return {
        loading: false,
        error: action.data,
      };
    default:
      return state;
  }
};
