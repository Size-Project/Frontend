import { combineReducers } from 'redux';
import category from './reducer/category.reducer';
import user from './reducer/user.reducer';

const rootReducer = combineReducers({
  category,
  user,
});

export default rootReducer;
