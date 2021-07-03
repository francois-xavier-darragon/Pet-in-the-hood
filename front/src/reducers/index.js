import { combineReducers } from 'redux';
import userReducer from './user';
import mapReducer from './map';
import bannerReducer from './banner';
import postReducer from './posts';
import createUserReducer from './createUser';
import newPetReducer from './newPet';
import createPostReducer from './createPost';

const rootReducer = combineReducers({
  user: userReducer,
  map: mapReducer,
  banner: bannerReducer,
  posts: postReducer,
  createUser: createUserReducer,
  newPet: newPetReducer,
  createPost: createPostReducer,

});

export default rootReducer;
