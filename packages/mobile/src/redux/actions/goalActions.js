import moment from 'moment';

import GoalApi from '../../repositories/goals';

import { decreaseLoading, increaseLoading } from './loadingAction';
import {
  SET_GOALS,
  SET_GOAL_DETAILS,
  SET_WEEK_GOALS,
  TOGGLE_GOAL,
} from './actionsTypes';

export const getGoals = (callback = (err) => {}) => async (dispatch) => {
  dispatch(increaseLoading());
  try {
    const payload = await GoalApi.getToday(moment().format('YYYY-MM-DD'));
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

export const getGoalDetails = (id, callback = (err) => {}) => async (
  dispatch
) => {
  dispatch(increaseLoading());
  try {
    const payload = await GoalApi.getById(id);
    dispatch({
      payload,
      type: SET_GOAL_DETAILS,
    });

    callback(null);
  } catch (err) {
    callback(err);
  } finally {
    dispatch(decreaseLoading());
  }
};

export const updateGoal = (goal, callback = (err) => {}) => async (
  dispatch
) => {
  dispatch(increaseLoading());
  try {
    await GoalApi.update(goal);
    dispatch({
      payload: goal,
      type: TOGGLE_GOAL,
    });

    callback(null);
  } catch (err) {
    callback(err);
  } finally {
    dispatch(decreaseLoading());
  }
};

export const postComment = (comment, callback = (err) => {}) => async (
  dispatch
) => {
  dispatch(increaseLoading());
  try {
    await GoalApi.comment(comment);

    callback(null);
  } catch (err) {
    callback(err);
  } finally {
    dispatch(decreaseLoading());
  }
};

export const getWeekGoals = (date, callback = (err) => {}) => async (
  dispatch
) => {
  dispatch(increaseLoading());
  try {
    const payload = await GoalApi.getToday(date);
    dispatch({
      payload,
      type: SET_WEEK_GOALS,
    });

    callback(null);
  } catch (err) {
    callback(err);
  } finally {
    dispatch(decreaseLoading());
  }
};
