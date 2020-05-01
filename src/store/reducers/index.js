import { combineReducers } from 'redux';

import imagesReducer from './imagesReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  images: imagesReducer,
  search: searchReducer
});
