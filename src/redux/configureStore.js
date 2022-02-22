import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import bookReducer from './reducers/books';

const reducers = combineReducers({
  book: bookReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(thunk, logger),
);

export default store;
