import {createStore, combineReducers} from 'redux';
import user from '~redux/reducers/user';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({user});
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
