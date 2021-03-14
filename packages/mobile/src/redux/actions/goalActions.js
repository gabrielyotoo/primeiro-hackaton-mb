import GoalApi from '../../repositories/goals';

import { decreaseLoading, increaseLoading } from './loadingAction';
import { SET_GOALS, TOGGLE_GOAL } from './actionsTypes';

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

export const updateGoal = (id, callback = (err) => {}) => async (dispatch) => {
  dispatch(increaseLoading());
  try {
    await GoalApi.update(id);
    dispatch({
      payload: id,
      type: TOGGLE_GOAL,
    });

    callback(null);
  } catch (err) {
    callback(err);
  } finally {
    dispatch(decreaseLoading());
  }
};
