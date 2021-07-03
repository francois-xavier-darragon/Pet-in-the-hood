// eslint-disable-next-line import/prefer-default-export
export const sortedPost = (allPosts, tri) => {
  let postSort;
  if (tri == '2') {
    const founded = allPosts.filter((found) => found.pet == null);
    postSort = founded;
  }else 
  if (tri == '3') {
    const losted = allPosts.filter((found) => found.pet != null);
    postSort = losted;
  }
  else {
    postSort = allPosts;
  }
  return postSort;
}
