import { connect } from 'react-redux';
import LastPosts from 'src/components/LastPosts';
import { mapToggler } from 'src/actions/map';
import { postTri } from 'src/actions/posts';

const mapStateToProps = (state) => ({
  toggleMap: state.map.toggleMap,
  allPosts: state.posts.allPosts,
  lastPostTri: state.posts.lastPostTri,
  center: state.createPost.center,
});

const mapDispatchToProps = (dispatch) => (
  {
    mapToggler: () => {
      dispatch(mapToggler());
    },
    postTri: (value) => {
      dispatch(postTri(value));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LastPosts);
