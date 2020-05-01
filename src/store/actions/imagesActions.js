import { IMAGES } from '../types';

const loadImages = term => ({
  type: IMAGES.LOAD,
  payload: { term }
});

const setImages = images => ({
  type: IMAGES.SUCCESS,
  payload: { images }
});

const setError = error => ({
  type: IMAGES.FAIL,
  payload: error
});

export { loadImages, setImages, setError };
