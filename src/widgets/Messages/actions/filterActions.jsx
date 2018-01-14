import { ActionMenu, UITimers } from "__GLOBAL__/constants";
import { createAction } from "__GLOBAL__/utils";

export const setFilterStatus = createAction("SET_FILTER_STATUS", "status");
export const setSort = createAction("SET_SORT", "sort");
export const setSearch = createAction("SET_SEARCH", "search");
export const toggleFilterMobile = createAction("SET_FILTER_MOBILE");

export function setVisibilityFilter(actionMenuOpen, isOpened) {
  return {
    type: "SET_VISIBILITY_FILTER",
    actionMenuOpen,
    filterOpen: isOpened
  };
}

export function setVisibilityFilterWithTimeout(dispatch) {
  // todo: implement clearTime. Right now, if you leave and enter, panel will close...
  setTimeout(() => {
    dispatch(setVisibilityFilter(ActionMenu.None));
  }, UITimers.panelAutoHide);
}
