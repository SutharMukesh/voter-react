import { combineReducers } from "redux";
import voterreducer from "./voterReducer";
import loadingreducer from "./loadingReducer";

export default combineReducers({
  voterreducer,
  loadingreducer
});
