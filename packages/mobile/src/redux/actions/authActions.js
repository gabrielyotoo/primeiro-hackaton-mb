import AuthApi from '../../repositories/auth';
import UserApi from '../../repositories/user';
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

    setAuthorizationHeader(auth.token ? `Bearer ${auth.token}` : '');
    const user = await UserApi.me();

    dispatch({
      payload: user,
      type: AUTH_ME,
    });
    callback(null);
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

export const register = (newUser, callback = (err) => {}) => async (
  dispatch
) => {
  dispatch(increaseLoading());
  try {
    await UserApi.register(newUser);
    const auth = await AuthApi.login({ ...newUser });

    dispatch({
      payload: auth,
      type: AUTH_LOGIN,
    });

    setAuthorizationHeader(auth.token ? `Bearer ${auth.token}` : '');
    const user = await UserApi.me();

    dispatch({
      payload: user,
      type: AUTH_ME,
    });
    callback(null);
  } catch (err) {
    if (err === 'User already exists') {
      callback('Usuário já cadastrado');
    } else {
      callback(err.message);
    }
  } finally {
    dispatch(decreaseLoading());
  }
};
