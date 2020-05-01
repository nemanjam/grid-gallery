import { put, call, takeEvery, select, take, fork } from 'redux-saga/effects';

import { setImages, setError } from '../actions/imagesActions';
import { incrementPage, resetPage } from '../actions/searchActions';
import { IMAGES } from '../types';
import { getImages } from '../api';

export const getPage = state => state.search.page;
export const getQuery = state => state.search.query;

export function* handleImagesLoad() {
  try {
    const query = yield select(getQuery);
    const page = yield select(getPage);
    const images = yield call(getImages, query, page);
    yield put(setImages(images));
    yield put(incrementPage());
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

export function* watchImagesLoad() {
  while (true) {
    yield take(IMAGES.LOAD);
    yield fork(handleImagesLoad); //take + fork = takeEvery
  }
}
