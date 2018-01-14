import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import messagesReducer from "./messagesReducer";

const messages = combineReducers({
  filterReducer,
  messagesReducer
});

export default messages;
