import axios from "axios";

export const registerAction = () => async (dispatch) => {
  dispatch({ type: "POST_REGISTER_REQUEST" });
  try {
    const response = await axios.get("/api/pizzas/register/");
    console.log("response success", response);
    dispatch({ type: "POST_REGISTER_SUCCESS", data: response.data });
  } catch (error) {
    console.log("response error", error);
    dispatch({ type: "POST_REGISTER_FAILED", data: error });
  }
};
