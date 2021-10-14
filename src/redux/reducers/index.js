import { combineReducers } from "redux";
import testSubApp from "./testSubApp";

const rootReducer = combineReducers({
  sub: testSubApp
});

export default rootReducer;