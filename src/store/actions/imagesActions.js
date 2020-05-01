import { IMAGES } from '../types';

const loadImages = () => ({
  type: IMAGES.LOAD
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
