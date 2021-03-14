import { ADD_TARGET, SET_TARGETS } from '../actions/actionsTypes';

export const initialState = {
  targets: [],
};

export const sessionReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case SET_TARGETS:
      return {
        ...state,
        targets: payload,
      };
    case ADD_TARGET:
      return {
        ...state,
        targets: [...state.targets, payload],
      };
    default:
      return state;
  }
};

export default sessionReducer;
