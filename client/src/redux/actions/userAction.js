import axios from "axios";

export const registerAction = (user) => async (dispatch) => {
  dispatch({ type: "POST_REGISTER_REQUEST" });
  try {
    const response = await axios.post("/api/users/register/", user);
    console.log("response success", response);
    dispatch({ type: "POST_REGISTER_SUCCESS", data: response.data });
  } catch (error) {
    console.log("response error", error);
    dispatch({ type: "POST_REGISTER_FAILED", data: error });
  }
};

export const loginAction = (user) => async (dispatch) => {
  dispatch({ type: "POST_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/users/login/", user);
    console.log("response success", response);
    dispatch({ type: "POST_LOGIN_SUCCESS", data: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    console.log("response error", error);
    dispatch({ type: "POST_LOGIN_FAILED", data: error });
  }
};

export const logoutAction = (dispatch) => {
  localStorage.removeItem("currentUser");
  window.location.href = "/login";
};
