import {
  ADD_TARGET,
  SET_TARGETS,
  SET_TARGET_DETAILS,
} from '../actions/actionsTypes';

export const initialState = {
  targets: [],
  details: {
    goals: [],
    progress: 0,
    id: null,
    title: null,
    description: null,
  },
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
    case SET_TARGET_DETAILS:
      return {
        ...state,
        details: payload,
      };
    default:
      return state;
  }
};

export default sessionReducer;
