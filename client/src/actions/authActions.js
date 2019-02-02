import axios from "axios";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Register user
export const signupUser = (userData, history) => dispatch => {
  axios
    .post("/signup", userData)
    .then(res => history.push("/login"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Login User
export const loginUser = userData => dispatch => {
  axios
    .post("/login", userData)
    .then(res => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
