import { BLOCK_SUBMIT, CHANGE_INPUT, PICTURE_CHANCE, REDIRECT, CHANGE_REDIRECT, SET_COORD, TOGGLE_ADDRESS, RESET_CREATE_USER } from 'src/actions/createUser';

export const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  picture: null,
  redirect: false,
  rue: '',
  ville: '',
  zipCode: null,
  lon: '',
  lat: '',
  checked: false,
  addressToggler: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      if (action.target === 'nom') {
        return {
          ...state,
          firstName: action.value,
        };
      }
      if (action.target === 'prenom') {
        return {
          ...state,
          lastName: action.value,
        };
      }
      if (action.target === 'email') {
        return {
          ...state,
          email: action.value,
        };
      }
      if (action.target === 'password') {
        return {
          ...state,
          password: action.value,
        };
      }
      if (action.target === 'rue') {
        return {
          ...state,
          rue: action.value,
        };
      }
      if (action.target === 'ville') {
        return {
          ...state,
          ville: action.value,
        };
      }
      if (action.target === 'zipCode') {
        return {
          ...state,
          zipCode: action.value,
        };
      }
      return {
        ...state,
        passwordConfirm: action.value,
      };
    case PICTURE_CHANCE:
      return {
        ...state,
        picture: action.value,
      };
    case REDIRECT:
      return {
        ...state,
        redirect: !state.redirect,
      };
    case BLOCK_SUBMIT:
      return {
        ...state,
        checked: true,
        lon: '',
        lat: '',
      };
    case CHANGE_REDIRECT:
      return {
        ...state,
        redirect: !state.redirect,
      };
    case RESET_CREATE_USER:
      return {
        ...state,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        picture: null,
        redirect: false,
        rue: '',
        ville: '',
        zipCode: null,
        lon: '',
        lat: '',
        checked: true,
        addressToggler: false,
      };
    case TOGGLE_ADDRESS:
      return {
        ...state,
        addressToggler: !state.addressToggler,
        checked: !state.checked,
      };
    case SET_COORD:
      return {
        ...state,
        lon: action.lon,
        lat: action.lat,
        checked: false,
      };
    default:
      return state;
  }
};

export default reducer;
