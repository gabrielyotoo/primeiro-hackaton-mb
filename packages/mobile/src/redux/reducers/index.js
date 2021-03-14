import { combineReducers } from 'redux';

import session from './session';
import targets from './targets';
import goals from './goals';

const appReducer = combineReducers({
  session,
  targets,
  goals,
});

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === 'LOGOUT') {
    newState = undefined;
  }

  return appReducer(newState, action);
};

export default rootReducer;
