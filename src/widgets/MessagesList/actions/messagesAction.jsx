import { WebAPI, SharepointVars, createAction } from "__GLOBAL__/utils";

export const fetchMessagesSuccess = createAction("FETCH_MSG_SUCCESS", "items");

export const onItemSelected = createAction("SELECT_MSG_ITEM", "messageId");

export const fetchMessages = () => dispatch => {
  WebAPI(`Customer/${SharepointVars.CustomerId()}/messagev6/`, res => {
    const items = res[2];

    dispatch(fetchMessagesSuccess(items));
  });
};
