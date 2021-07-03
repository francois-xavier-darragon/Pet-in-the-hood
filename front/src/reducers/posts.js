import { SAVE_POSTS, POST_TRI, SHOW_EMAIL, OWNER_POST_EMAIL } from 'src/actions/posts';
import { SAVE_NEW_POST } from 'src/actions/createPost';

export const initialState = {
  allPosts: [],
  lastPostTri: '1',
  showEmailToggler: false,
  ownerPostMail: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_POSTS:
      return {
        ...state,
        allPosts: action.posts,
      };
    case POST_TRI:
      return {
        ...state,
        lastPostTri: action.value,
      };
    case SAVE_NEW_POST:
      return {
        ...state,
        allPosts: [...state.allPosts, action.post],
      };
    case SHOW_EMAIL:
      return {
        ...state,
        showEmailToggler: !state.showEmailToggler,
      };
    case OWNER_POST_EMAIL:
      return {
        ...state,
        ownerPostMail: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
