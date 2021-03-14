import { SET_WEEK_GOALS } from '../actions/actionsTypes';

export const initialState = {
  weekGoals: [],
};

export const goalReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case SET_WEEK_GOALS:
      return {
        ...state,
        weekGoals: payload,
      };
    default:
      return state;
  }
};

export default goalReducer;
