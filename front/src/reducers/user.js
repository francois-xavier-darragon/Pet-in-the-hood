import {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  LOG_OUT, SAVE_USER,
  SHOW_EDIT_FORM, SAVE_PROFILE,
  CHANGE_TITLE, CHANGE_DESCRIPTION,
  CHANGE_LAT,
  CHANGE_DATE,
  CHANGE_FIRSTNAME,
  CHANGE_PHONE,
  CHANGE_NAME,
  SUBMIT_LOSTED,
  SAVE_ALL_PETS,
  SAVE_BREEDS,
  NEW_PET_PICTURE,

} from 'src/actions/user';
import { RESET_LOSTED_PET } from 'src/actions/createPost';

// Récupération de isLogged, pseudo et user complet
// dans le localStorage si les données existent
const isJwt = (localStorage.getItem('JWT') !== null);
const pseudo = (localStorage.getItem('pseudo') !== null ? localStorage.getItem('pseudo') : '');
const storageUser = (localStorage.getItem('actualUser') !== null ? JSON.parse(localStorage.getItem('actualUser')) : []);

const now = new Date();
export const initialState = {
  actualUser: storageUser,
  pseudo: pseudo,
  email: '',
  password: '',
  isLogged: isJwt,
  EmailInput: storageUser.email,
  passwordInput: '',
  token: localStorage.getItem('JWT'),
  toggleEditProfil: false,
  AddressInput: '',
  descriptionInput: '',
  titleInput: '',
  dateInput: `${now.getFullYear()}-0${now.getMonth() + 1}-${now.getDate()}`,
  PhoneInput: '',
  FirstNameInput: storageUser.firstname,
  NameInput: storageUser.lastname,
  lostedPet: null,
  OnePetUser: [],
  allBreeds: [],
  newPetPicture: null,
  userAddress: {
    lon: ((storageUser.address === undefined || storageUser.address === null) ? '' : storageUser.address.longitude),
    lat: ((storageUser.address === undefined || storageUser.address === null) ? '' : storageUser.address.latitude),
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        EmailInput: action.emailvalue,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        passwordInput: action.value,
      };
    case SAVE_BREEDS:
      return {
        ...state,
        allBreeds: action.value,
      };
    case LOG_OUT:
      return {
        ...state,
        isLogged: false,
        token: null,
        pseudo: '',
      };
    case SAVE_ALL_PETS:
      return {
        ...state,
        OnePetUser: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        token: localStorage.getItem('JWT'),
        isLogged: true,
      };
    case NEW_PET_PICTURE:
      return {
        ...state,
        newPetPicture: action.value,

      };
    case SHOW_EDIT_FORM:
      return {
        ...state,
        toggleEditProfil: !state.toggleEditProfil,
      };
    case SAVE_PROFILE:
      return {
        ...state,
        pseudo: action.pseudo,
        actualUser: action.actualUser,
        email: '',
        password: '',
        toggleEditProfil: false,

      };

    case CHANGE_DESCRIPTION:
      return {
        ...state,
        descriptionInput: action.descriptionvalue,
      };

    case CHANGE_TITLE:
      return {
        ...state,
        titleInput: action.titlevalue,
      };
    case CHANGE_DATE:
      return {
        ...state,
        dateInput: action.datevalue,
      };

    case CHANGE_FIRSTNAME:
      return {
        ...state,
        FirstNameInput: action.firstnamevalue,
      };

    case CHANGE_NAME:
      return {
        ...state,
        NameInput: action.value,
      };
    case SUBMIT_LOSTED:
      return {
        ...state,
        lostedPet: action.submitLostedvalue,
      };
    case RESET_LOSTED_PET:
      return {
        ...state,
        lostedPet: null,
        titleInput: '',
        dateInput: `${now.getFullYear()}-0${now.getMonth() + 1}-${now.getDate()}`,
        descriptionInput: '',
      };
    case CHANGE_LAT:
      return {
        ...state,
        userAddress: {
          lon: state.userAddress.lon,
          lat: action.value,
        },
      };
    case CHANGE_PHONE:
      return {
        ...state,
        userAddress: {
          lon: action.value,
          lat: state.userAddress.lat,
        },
      };
    default:
      return state;
  }
};

export default reducer;
