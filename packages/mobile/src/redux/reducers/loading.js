import { DECREASE_LOADING, INCREASE_LOADING } from '../actions/actionsTypes';

export const initialState = {
  loading: false,
  extractLoading: false,
};

let inc = 0;

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_LOADING:
      inc += 1;

      return {
        ...state,
        loading: inc > 0,
      };
    case DECREASE_LOADING:
      inc -= 1;

      return {
        ...state,
        loading: inc > 0,
      };
    default:
      return state;
  }
};

export default loadingReducer;
