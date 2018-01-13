import { ActionMenu } from "__GLOBAL__/constants";
import { createReducer } from "__GLOBAL__/utils";

const defaultState = {
  actionMenuOpen: ActionMenu.None,
  search: "",
  status: "ALL",
  filterOpen: false,
  sort: null
};

const filterReducer = {
  SET_VISIBILITY_FILTER: (state, action) =>
    Object.assign({}, state, {
      actionMenuOpen: action.actionMenuOpen,
      filterOpen: !action.filterOpen
    }),

  SET_FILTER_STATUS: (state, action) =>
    Object.assign({}, state, { status: action.status }),

  SET_SORT: (state, action) => Object.assign({}, state, { sort: action.sort }),

  SET_SEARCH: (state, action) =>
    Object.assign({}, state, { search: action.search }),

  SET_FILTER_MOBILE: state =>
    Object.assign({}, state, { filterOpen: !state.filterOpen })
};

export default createReducer(defaultState, filterReducer);
