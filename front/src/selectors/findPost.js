export function findPost(state, searchedSlug) {
   const onePost = state.posts.allPosts.find((testedPost) => {
     return testedPost.id == searchedSlug;
   });
return onePost;
}
