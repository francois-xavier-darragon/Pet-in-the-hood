// eslint-disable-next-line import/prefer-default-export
export const last5 = (lastSortedPost) => {
  let fivePosts;
  const number = lastSortedPost.length;
  if (number > 5) {
    fivePosts = lastSortedPost.slice(0, 5);
  }
  else {
    fivePosts = lastSortedPost;
  }
  return fivePosts;
}