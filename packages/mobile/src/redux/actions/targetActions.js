import TargetApi from '../../repositories/targets';

import { decreaseLoading, increaseLoading } from './loadingAction';
import { SET_TARGETS } from './actionsTypes';

export const getTargets = (callback = (err) => {}) => async (dispatch) => {
  dispatch(increaseLoading());
  try {
    const payload = await TargetApi.getAll();
    dispatch({
      payload,
      type: SET_TARGETS,
    });

    callback(null);
  } catch (err) {
    callback(err);
  } finally {
    dispatch(decreaseLoading());
  }
};
