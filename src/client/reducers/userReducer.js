import { FETCH_USERS } from "../actions/index";

export default function userReducer(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
}
