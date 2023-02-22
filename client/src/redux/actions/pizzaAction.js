import axios from "axios";

export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" });
  try {
    const response = await axios.get("/api/pizzas/getallpizzas/");
    console.log("response success", response);
    dispatch({ type: "GET_PIZZAS_SUCCESS", data: response.data });
  } catch (error) {
    console.log("response error", error);
    dispatch({ type: "GET_PIZZAS_FAILED", data: error });
  }
};
