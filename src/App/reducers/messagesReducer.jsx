import { createReducer } from "__GLOBAL__/utils";

const defaultState = {
  data: null,
  dataDetail: [],
  sortByDesc: null,
  sortBy: null,
  selectedItem: null,
  messageId: null,
  dataLoaded: false,
  dataDetailLoaded: false
};

const messagesReducer = {
  SELECT_MSG_ITEM: (state, action) =>
    Object.assign({}, state, { messageId: action.messageId }),

  FETCH_MSG_DETAIL_PENDING: state =>
    Object.assign({}, state, { dataDetailLoaded: false }),

  FETCH_MSG_SUCCESS: (state, action) =>
    Object.assign({}, state, {
      data: action.items,
      sortByDesc: action.dataSetup.setup.SortByDesc,
      sortBy: action.dataSetup.setup.Sortby,
      dataLoaded: true,
      selectedItem: action.selectedItem,
      messageId: action.selectedItem ? action.selectedItem.MessageId : null
    }),

  FETCH_MSG_DETAIL_SUCCESS: (state, action) =>
    Object.assign({}, state, {
      dataDetail: action.dataDetail,
      dataDetailLoaded: true
    })
};

export default createReducer(defaultState, messagesReducer);
