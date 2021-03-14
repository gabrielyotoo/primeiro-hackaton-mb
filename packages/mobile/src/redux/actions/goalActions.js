import GoalApi from '../../repositories/goals';

import { decreaseLoading, increaseLoading } from './loadingAction';
import { SET_GOALS } from './actionsTypes';

export const getGoals = (callback = (err) => {}) => async (dispatch) => {
  dispatch(increaseLoading());
  try {
    const payload = await GoalApi.getToday();
    dispatch({
      payload,
      type: SET_GOALS,
    });

    callback(null);
  } catch (err) {
    callback(err);
  } finally {
    dispatch(decreaseLoading());
  }
};

export const getGoalDetail = (callback = (err) => {}) => async (dispatch) => {
  dispatch(increaseLoading());
  try {
    const payload = await GoalApi.getToday();
    dispatch({
      payload,
      type: SET_GOALS,
    });

    callback(null);
  } catch (err) {
    callback(err);
  } finally {
    dispatch(decreaseLoading());
  }
};
