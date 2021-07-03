import { CHANGE_INPUT_CREATE_PET } from 'src/actions/user';

export const initialState = {
  nom: "",
  type: "1",
  race: "",
  desc: "",
  tattoo: "",
  idCard: "",
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_CREATE_PET:
      if (action.target === 'nom') {
        return {
          ...state,
          nom: action.value,
        };
      }
      if (action.target === 'type') {
        return {
          ...state,
          type: action.value,
        };
      }
      if (action.target === 'race') {
        return {
          ...state,
          race: action.value,
        };
      }
      if (action.target === 'desc') {
        return {
          ...state,
          desc: action.value,
        };
      }
      if (action.target === 'tattoo') {
        return {
          ...state,
          tattoo: action.value,
        };
      }
      if (action.target === 'idCard') {
        return {
          ...state,
          idCard: action.value,
        };
      }
    default:
      return state;
  }
};

export default reducer;