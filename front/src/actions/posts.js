export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const getAllPosts = () => ({
  type: GET_ALL_POSTS,
});

export const SAVE_POSTS = 'SAVE_POSTS';
export const savePosts = (data) => ({
  type: SAVE_POSTS,
  posts: data,
});

export const POST_TRI = 'POST_TRI';
export const postTri = (value) => ({
  type: POST_TRI,
  value: value,
});

export const SHOW_EMAIL = 'SHOW_EMAIL';
export const showEmail = () => ({
  type: SHOW_EMAIL,
});

export const GET_USER = 'GET_USER';
export const getUser = (value) => ({
  type: GET_USER,
  value: value,
});
export const OWNER_POST_EMAIL = 'OWNER_POST_EMAIL';

export const ownerPostMail = (value) => ({
  type: OWNER_POST_EMAIL,
  value: value,
});

export const ARCHIVE_POST = 'ARCHIVE_POST';
export const archivePost = (value) => ({
  type: ARCHIVE_POST,
  value: value,

});
