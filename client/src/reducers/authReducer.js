import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        // TODO: add isAutheticated method to check for JWT
        isAutheticated: true,
        user: action.payload
      };
    default:
      return state;
  }
}
