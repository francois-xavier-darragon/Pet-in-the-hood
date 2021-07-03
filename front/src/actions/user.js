export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const LOG_OUT = 'LOG_OUT';
export const CONNECT_USER = 'CONNECT_USER';
export const SAVE_USER = 'SAVE_USER';
export const CHANGE_INPUT_CREATE_PET = 'CHANGE_INPUT_CREATE_PET';
export const SHOW_EDIT_FORM = 'SHOW_EDIT_FORM';
export const ADD_PET = 'ADD_PET';
export const SAVE_PROFILE = 'SAVE_PROFILE';
export const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_LAT = 'CHANGE_LAT';
export const CHANGE_DATE = 'CHANGE_DATE';
export const CHANGE_FIRSTNAME = ' CHANGE_FIRSTNAME';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_PHONE = 'CHANGE_PHONE';
export const SUBMIT_LOSTED = 'SUBMIT_LOSTED';
export const ONE_PET_USER = 'ONE_PET_USER';

export const changeEmail = (value) => ({
  type: CHANGE_EMAIL,
  emailvalue: value,
});
export const changePassword = (value) => ({
  type: CHANGE_PASSWORD,
  value: value,
});
export const loggedOut = () => ({
  type: LOG_OUT,
});
export const connectUser = () => ({
  type: CONNECT_USER,
});
export const saveUser = () => ({
  type: SAVE_USER,
});

export const showEditForm = () => ({
  type: SHOW_EDIT_FORM,
});
export const saveProfile = (data) => ({
  type: SAVE_PROFILE,
  actualUser: data,
  pseudo: data.firstname,
});

export const changeLat = (value) => ({
  type: CHANGE_LAT,
  value: value,
});

export const changeTitle = (value) => ({
  type: CHANGE_TITLE,
  titlevalue: value,
});

export const changeDescription = (value) => ({
  type: CHANGE_DESCRIPTION,
  descriptionvalue: value,
});
export const submitNewPet = () => ({
  type: ADD_PET,
});
export const changeInputCreatePet = (value, target) => ({
  type: CHANGE_INPUT_CREATE_PET,
  value: value,
  target: target,
})
export const changeDate = (value) => ({
  type: CHANGE_DATE,
  datevalue: value,
});
export const changeFirstName = (value) => ({
  type: CHANGE_FIRSTNAME,
  firstnamevalue: value,
});
export const changeName = (value) => ({
  type: CHANGE_NAME,
  value: value,
});

export const changeLon = (value) => ({
  type: CHANGE_PHONE,
  value: value,
});

export const submitLosted = (value) => ({
  type: SUBMIT_LOSTED,
  submitLostedvalue: value,
});
export const OnePetUser = (value) => ({
  type: ONE_PET_USER,
  OnePetUser: value,
});
export const SAVE_ALL_PETS = 'SAVE_ALL_PETS';
export const saveAllPets = (value) => ({
  type: SAVE_ALL_PETS,
  value: value,
});
export const GET_ALL_BREED = 'GET_ALL_BREED';
export const getAllBreed = () => ({
  type: GET_ALL_BREED,
});
export const SAVE_BREEDS = 'SAVE_BREEDS';
export const saveBreeds = (value) => ({
  type: SAVE_BREEDS,
  value: value,
});
export const NEW_PET_PICTURE = 'NEW_PET_PICTURE';

export const newPictureChange = (value) => ({
  type: NEW_PET_PICTURE,
  value: value,
});
export const PATCH_USER = 'PATCH_USER';

export const patchUser = () => ({
  type: PATCH_USER,
});
