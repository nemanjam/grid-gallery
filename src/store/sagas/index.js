import { all } from 'redux-saga/effects';

import { watchImagesLoad } from './imagesSaga';

export default function* rootSaga() {
  yield all([watchImagesLoad()]); // poziv()
}
