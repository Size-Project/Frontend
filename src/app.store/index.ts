import { combineReducers } from 'redux';
import category from './reducer/category.reducer';

const rootReducer = combineReducers({
  category,
});

export default rootReducer;
