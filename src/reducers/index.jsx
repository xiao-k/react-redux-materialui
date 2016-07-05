import { combineReducers } from 'redux';
import search from './search';
// import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  search
});

export default rootReducer;