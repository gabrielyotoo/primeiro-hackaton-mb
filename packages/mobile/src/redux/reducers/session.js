import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ME } from '../actions/actionsTypes';

export const initialState = {
  accessToken: null,
  loggedUser: {
    id: null,
    name: null,
  },
};

export const sessionReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        accessToken: payload.accessToken,
      };
    case AUTH_ME:
      return {
        ...state,
        loggedUser: {
          ...payload,
        },
      };
    case AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default sessionReducer;
