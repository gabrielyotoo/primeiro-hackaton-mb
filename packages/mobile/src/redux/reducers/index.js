import { combineReducers } from 'redux';

import session from './session';
import targets from './targets';
import goals from './goals';
import week from './week';

const appReducer = combineReducers({
  session,
  targets,
  goals,
  week,
});

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === 'LOGOUT') {
    newState = undefined;
  }

  return appReducer(newState, action);
};

export default rootReducer;
