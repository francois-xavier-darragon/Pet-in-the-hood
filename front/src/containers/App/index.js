import { connect } from 'react-redux';
import App from 'src/components/App';
import { getAllPosts, savePosts } from 'src/actions/posts';
import { OnePetUser } from 'src/actions/user';
import { fixMap } from 'src/actions/createPost';

const mapStateToProps = (state) => ({
  savePosts: state.posts.allPosts,
  actualUser: state.user.actualUser,
});

const mapDispatchToProps = (dispatch) => (
  {
    getAllPosts: () => {
      dispatch(getAllPosts());
    },
    savePosts: (data) => {
      dispatch(savePosts(data));
    },
    OnePetUser: () => {
      dispatch(OnePetUser());
    },
    fixMap: () => {
      dispatch(fixMap());
    },

  }
);
export default connect(mapStateToProps, mapDispatchToProps)(App);
