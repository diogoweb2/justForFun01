import { WebAPI, SharepointVars, createAction } from "__GLOBAL__/utils";

export const fetchMessagesPending = createAction("FETCH_MSG_PENDING");
export const fetchMessagesSuccess = createAction(
  "FETCH_MSG_SUCCESS",
  "items",
  "dataSetup",
  "selectedItem"
);
export const fetchMessagesError = createAction("FETCH_MSG_ERROR");
export const onItemSelected = createAction("SELECT_MSG_ITEM", "messageId");
export const fetchMessagesDetailSuccess = createAction(
  "FETCH_MSG_DETAIL_SUCCESS",
  "dataDetail"
);
export const fetchMessagesDetailPending = createAction(
  "FETCH_MSG_DETAIL_PENDING"
);

export const getDataDetail = messageId => dispatch => {
  dispatch(fetchMessagesDetailPending());

  WebAPI(
    `/Customer/${SharepointVars.CustomerId()}/messagev6/${messageId}`,
    res => {
      dispatch(fetchMessagesDetailSuccess(res[2]));
    }
  );
};

export const fetchMessages = () => dispatch => {
  dispatch(fetchMessagesPending());

  return WebAPI(`Customer/${SharepointVars.CustomerId()}/messagev6/`, res => {
    const items = res[2];
    const dataSetup = res[3];
    const selectedItem = items[0];

    dispatch(fetchMessagesSuccess(items, dataSetup, selectedItem));
  });
};
