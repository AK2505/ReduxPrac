import axios from "axios";

import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userTypes";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailuer = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const user = response.data;
        dispatch(fetchUserSuccess(user));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchUserFailuer(errorMessage));
      });
  };
};
