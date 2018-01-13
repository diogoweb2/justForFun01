export default function createReducer(initialState, actionHandlers) {
  return function reducer(state = initialState, action) {
    // eslint-disable-next-line no-prototype-builtins
    if (actionHandlers.hasOwnProperty(action.type)) {
      return actionHandlers[action.type](state, action);
    }
    return state;
  };
}

export function createAction(type, ...argNames) {
  return (...args) => {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}
