import { SET_QUERY, INCREMENT_PAGE, RESET_PAGE } from '../types';

export const setQuery = query => ({
  type: SET_QUERY,
  payload: { query }
});

export const incrementPage = () => ({
  type: INCREMENT_PAGE
});

export const resetPage = () => ({
  type: RESET_PAGE
});
