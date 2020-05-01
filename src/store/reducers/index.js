import { combineReducers } from 'redux';

import imagesReducer from './imagesReducer';

export default combineReducers({ images: imagesReducer });
