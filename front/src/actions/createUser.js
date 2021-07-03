export const CHANGE_INPUT = 'CHANGE_INPUT';
export const changeInputCreateUser = (value, target) => ({
  type: CHANGE_INPUT,
  value: value,
  target: target,
});
export const SUBMIT_NEW_USER= 'SUBMIT_NEW_USER';
export const submitNewUser = () => ({
  type: SUBMIT_NEW_USER,
});

export const PICTURE_CHANCE = 'PICTURE_CHANCE';
export const pictureChange = (value) => ({
  type: PICTURE_CHANCE,
  value: value,
});
export const SUBMIT_PICTURE = 'SUBMIT_PICTURE';
export const submitPicture = () => ({
  type: SUBMIT_PICTURE,
});
export const REDIRECT = 'REDIRECT';

export const redirect = () => ({
  type: REDIRECT,
});
export const CHANGE_REDIRECT = 'CHANGE_REDIRECT';

export const changeRedirect = () => ({
  type: CHANGE_REDIRECT,
});
export const MATCH_COORD = 'MATCH_COORD';

export const matchCoord = (value) => ({
  type: MATCH_COORD,
  value: value,
});
export const SET_COORD = 'SET_COORD';

export const setCoord = (lon, lat) => ({
  type: SET_COORD,
  lon: lon,
  lat: lat,
});
export const TOGGLE_ADDRESS = 'TOGGLE_ADDRESS';

export const toggleAddress = () => ({
  type: TOGGLE_ADDRESS,
});
export const RESET_CREATE_USER = 'RESET_CREATE_USER';

export const resetCreateUser = () => ({
  type: RESET_CREATE_USER,
});
export const BLOCK_SUBMIT = 'BLOCK_SUBMIT';

export const blockSubmit = () => ({
  type: BLOCK_SUBMIT,
});
