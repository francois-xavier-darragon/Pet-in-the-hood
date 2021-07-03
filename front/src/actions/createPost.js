// Action.type
export const CHANGE_POSITION = 'CHANGE_POSITION';
export const MATCH_COORD = 'MATCH_COORD';

// Fonctions
export const changePosition = (value) => ({
  type: CHANGE_POSITION,
  value: value,
});
export const matchCoord = () => ({
  type: MATCH_COORD,
});
export const CREATE_POST = 'CREATE_POST';
export const submitAdvert = () => ({
  type: CREATE_POST,
});
export const SAVE_NEW_POST = 'SAVE_NEW_POST';
export const saveNewPost = (responseAdvert) => ({
  type: SAVE_NEW_POST,
  post: responseAdvert,
});
export const RESET_LOSTED_PET = 'RESET_LOSTED_PET';
export const resetLostedPet = () => ({
  type: RESET_LOSTED_PET,
});
export const SUBMIT_PICTURE = 'SUBMIT_PICTURE';
export const submitHandleChangePicture = (value) => ({
  type: SUBMIT_PICTURE,
  value: value,
});
export const CHANGE_ADDRESS_USER = 'CHANGE_ADDRESS';
export const changeAddressUser = (value) => ({
  type: CHANGE_ADDRESS_USER,
  value: value,
});
export const FIX_MAP = 'FIX_MAP';

export const fixMap = () => ({
  type: FIX_MAP,
});
