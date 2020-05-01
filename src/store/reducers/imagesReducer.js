import { IMAGES, SET_QUERY } from '../types';

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
        images: [...state.images, ...payload.images]
      };
    case IMAGES.FAIL:
      return {
        ...state,
        loading: false,
        images: [],
        error: payload
      };
    case SET_QUERY:
      return {
        ...state,
        images: []
      };
    default:
      return state;
  }
};
export default imagesReducer;
