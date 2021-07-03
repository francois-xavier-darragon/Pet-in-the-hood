import { connect } from 'react-redux';
import PostsList from 'src/components/PostsList';
import { getAllPosts, savePosts } from 'src/actions/posts';
import { mapToggler } from 'src/actions/map';
import { postTri } from 'src/actions/posts';

const mapStateToProps = (state) => ({
  savePosts: state.posts.allPosts,
  toggleMap: state.map.toggleMap,
  allPosts: state.posts.allPosts,
  lastPostTri: state.posts.lastPostTri,
  center: state.createPost.center,
});

const mapDispatchToProps = (dispatch) => (
  {
    getAllPosts: () => {
      dispatch(getAllPosts());
    },
    mapToggler: () => {
      dispatch(mapToggler());
    },
    postTri: (value) => {
      dispatch(postTri(value));
    },

  }
);
export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
