import { MAP_TOGGLER } from 'src/actions/map';

export const initialState = {
  toggleMap: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MAP_TOGGLER:
      return {
        ...state,
        toggleMap: !state.toggleMap,
      };
    default:
      return state;
  }
};

export default reducer;
