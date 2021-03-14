import {
  ADD_GOAL,
  SET_GOAL_DETAILS,
  TOGGLE_GOAL,
  SET_GOALS,
} from '../actions/actionsTypes';

export const initialState = {
  goals: [],
  detail: {
    id: null,
    title: null,
    text: null,
    done: false,
    dueDate: null,
  },
};

export const goalReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case SET_GOALS:
      return {
        ...state,
        goals: payload,
      };
    case ADD_GOAL:
      return {
        ...state,
        goals: [...state.goals, ...payload],
      };
    case TOGGLE_GOAL: {
      const goalToUpdate = state.goals.findIndex((goal) => goal.id === payload);
      const newGoals = [...state.goals];

      if (goalToUpdate === -1) {
        return state;
      } else {
        newGoals[parseInt(goalToUpdate, 10)] = {
          ...state.goals[parseInt(goalToUpdate, 10)],
          done: !state.goals[parseInt(goalToUpdate, 10)].done,
        };
      }

      return {
        ...state,
        goals: newGoals,
      };
    }
    case SET_GOAL_DETAILS:
      return {
        ...state,
        detail: payload,
      };
    default:
      return state;
  }
};

export default goalReducer;
