import { SET_QUERY, INCREMENT_PAGE, RESET_PAGE } from '../types';

const initialState = { query: null, page: 1 };

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_QUERY:
      return {
        ...state,
        query: payload.query
      };
    case INCREMENT_PAGE:
      return {
        ...state,
        page: state.page + 1
      };
    case RESET_PAGE:
      return {
        ...state,
        page: 1
      };

    default:
      return state;
  }
};
export default searchReducer;
