import { createStore, applyMiddleware, compose } from 'redux';
import debug from 'src/middlewares/debug';
import ajax from 'src/middlewares/ajax';
import reducer from 'src/reducers';

const middlewares = applyMiddleware(debug, ajax);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(middlewares);

const store = createStore(reducer, enhancers);

export default store;
