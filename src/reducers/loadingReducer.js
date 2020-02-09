import { LOADING_STATE } from "../actions/types";

const initialState = { loading: false };
export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_STATE:
      debugger;
      state.loading = action.payload;
      return { ...state };
    default:
      return state;
  }
}
