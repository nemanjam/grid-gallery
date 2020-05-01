import { IMAGES } from '../types';

const initialState = { images: [], loading: false, error: null };

const imagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case IMAGES.LOAD:
      return {
        ...state,
        loading: true,
        error: null
      };
    case IMAGES.SUCCESS:
      return {
        ...state,
        loading: false,
        images: payload.images
      };
    case IMAGES.FAIL:
      return {
        ...state,
        loading: false,
        images: [],
        error: payload
      };
    default:
      return state;
  }
};
export default imagesReducer;
