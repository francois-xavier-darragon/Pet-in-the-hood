import { CHANGE_POSITION, SUBMIT_PICTURE, CHANGE_ADDRESS_USER, FIX_MAP } from 'src/actions/createPost';

let user;
let address;
const defaultAddress = {
  latitude: 47.663,
  longitude: 6.866,
};
if (localStorage.getItem('actualUser') !== null) {
  user = JSON.parse(localStorage.getItem('actualUser'));
  address = user.address;
  if (user.address == undefined) {
    address = defaultAddress;
  }
}else{
  address = defaultAddress;
}
export const initialState = {
  center: {
    lat: address.latitude,
    lng: address.longitude,
  },
  picturePost: null,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_POSITION:
      return {
        ...state,
        center: {
          lat: action.value.lat,
          lng: action.value.lng,
        },
      };
    case SUBMIT_PICTURE:
      return {
        ...state,
        picturePost: action.value,
      };
    case CHANGE_ADDRESS_USER:
      return {
        ...state,
        center: {
          lat: action.value.latitude,
          lng: action.value.longitude,
        },
      };
    case FIX_MAP:
      user = JSON.parse(localStorage.getItem('actualUser'));
      return {
        ...state,
        center: {
          lat: user.address.latitude,
          lng: user.address.longitude,
        },
      };
    default:
      return state;
  }
};

export default reducer;
