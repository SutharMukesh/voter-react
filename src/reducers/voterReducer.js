import { FETCH_VOTER, ADD_VOTER } from "../actions/types";

const initialState = {
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_VOTER:
      debugger;
      state.voters = action.payload;
      return {...state};
    default:
      return state;
  }
}
