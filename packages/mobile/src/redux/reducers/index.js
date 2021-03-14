import { combineReducers } from 'redux';

import session from './session';
import targets from './targets';

const appReducer = combineReducers({
  session,
  targets,
});

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === 'LOGOUT') {
    newState = undefined;
  }

  return appReducer(newState, action);
};

export default rootReducer;
