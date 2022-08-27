import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
  AUTH_SUCESS_WITH_FIRE,
} from "./auth.types";

export const authInitalState = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
  profileInfo: {},
};

export const authReducer = (state = authInitalState, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    case AUTH_SIGN_IN_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }

    case AUTH_SIGN_IN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case AUTH_SIGN_OUT: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }

    case AUTH_SUCESS_WITH_FIRE: {
      return {
        ...state,
        profileInfo: payload,
      };
    }

    default:
      return state;
  }
};
