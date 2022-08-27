import axios from "axios";
import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
} from "./auth.types";

export const loginAPI = (creds) => async (dispatch) => {
  dispatch({ type: AUTH_SIGN_IN_LOADING });
  try {
    const res = await axios.post("https://reqres.in/api/login", creds);
    dispatch({
      type: AUTH_SIGN_IN_SUCCESS,
      payload: {
        token: res.data.token,
        isAuthenticated: true,
      },
    });
    return res.data;
  } catch (e) {
    dispatch({ type: AUTH_SIGN_IN_ERROR });

    console.log(e.message);
  }
};

export const logout = () => ({
  type: AUTH_SIGN_OUT,
  payload: {
    token: null,
    isAuthenticated: false,
  },
});
