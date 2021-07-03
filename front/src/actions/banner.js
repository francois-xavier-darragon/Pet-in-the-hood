export const CHANGE_TATOO_INPUT = 'CHANGE_TATOO_INPUT';
export const changeTatooInput = (value) => ({
  type: CHANGE_TATOO_INPUT,
  tatooValue: value,
});

export const SEARCH_TATOO = 'SEARCH_TATOO ';
export const searchTatoo = (value) => ({
  type: SEARCH_TATOO,
  value: value,
});
export const RESULT_BANNER_QUERY = 'RESULT_BANNER_QUERY';
export const resultBannerQuery = (value) => ({
  type: RESULT_BANNER_QUERY,
  value: value,
});
export const TOGGLE_RESULT = 'TOGGLE_RESULT';

export const toggleShowResult = () => ({
  type: TOGGLE_RESULT,
});
