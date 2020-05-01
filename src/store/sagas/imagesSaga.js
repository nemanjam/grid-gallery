import { put, call, takeEvery, select } from 'redux-saga/effects';

import { setImages, setError } from '../actions/imagesActions';
import { IMAGES } from '../types';
import { getImages } from '../api';

export const getPage = state => state.nextPage;

export function* handleImagesLoad() {
  try {
    // const page = yield select(getPage);
    const images = yield call(getImages, 'klen', 1);
    yield put(setImages(images));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad); //svaki klik, broj poziva
}
