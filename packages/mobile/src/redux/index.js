import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducerObj from './reducers';

const init = () => createStore(rootReducerObj, compose(applyMiddleware(thunk)));

const store = init();

export default store;
