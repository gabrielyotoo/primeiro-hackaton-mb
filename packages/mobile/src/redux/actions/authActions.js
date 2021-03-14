import AuthApi from '../../repositories/auth';
import { setAuthorizationHeader } from '../../repositories/instance';

import { decreaseLoading, increaseLoading } from './loadingAction';
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ME } from './actionsTypes';

export const authenticate = (userData, callback = (err) => {}) => async (
  dispatch
) => {
  dispatch(increaseLoading());
  try {
    const auth = await AuthApi.login(userData);
    dispatch({
      payload: auth,
      type: AUTH_LOGIN,
    });

    setAuthorizationHeader(
      auth.accessToken ? `Bearer ${auth.accessToken}` : ''
    );
    const user = await AuthApi.me();

    dispatch({
      payload: user,
      type: AUTH_ME,
    });
  } catch (err) {
    callback(err);
  } finally {
    dispatch(decreaseLoading());
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: AUTH_LOGOUT,
  });
};

export const getMe = (callback = (res, err) => {}) => async (dispatch) => {
  dispatch(increaseLoading());
  try {
    const user = await AuthApi.me();

    dispatch({
      payload: user,
      type: AUTH_ME,
    });

    callback(user, null);
  } catch (err) {
    callback(null, err);
  } finally {
    dispatch(decreaseLoading());
  }
};