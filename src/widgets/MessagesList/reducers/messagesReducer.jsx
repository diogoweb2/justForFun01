import { createReducer } from "__GLOBAL__/utils";

const defaultState = {
  items: null,
  dataLoaded: false
};
const MAX_ITEMS = 5;

const messagesReducer = {
  FETCH_MSG_SUCCESS: (state, action) =>
    Object.assign({}, state, {
      items: action.items.slice(0, MAX_ITEMS),
      total: action.items.length,
      dataLoaded: true
    }),
  SELECT_MSG_ITEM: (state, action) => {
    console.log(action.messageId);
    return state;
  }
};

export default createReducer(defaultState, messagesReducer);
