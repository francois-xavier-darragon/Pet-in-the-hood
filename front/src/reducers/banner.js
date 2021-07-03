import { CHANGE_TATOO_INPUT, RESULT_BANNER_QUERY, TOGGLE_RESULT } from 'src/actions/banner';

export const initialState = {
  tatooInput: '',
  queryResult: [],
  showResult: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_TATOO_INPUT:
      return {
        ...state,
        tatooInput: action.tatooValue,
      };
    case RESULT_BANNER_QUERY:
      return {
        ...state,
        queryResult: [action.value],
        queryNull: false,
        tatooInput: '',
      };
    case TOGGLE_RESULT:
      return {
        ...state,
        showResult: !state.showResult,
      };
    default:
      return state;
  }
};

export default reducer;
