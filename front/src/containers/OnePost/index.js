import { connect } from 'react-redux';
import OnePost from 'src/components/OnePost';
import { findPost } from 'src/selectors/findPost';
import { withRouter } from 'react-router';
import { showEmail, getUser, archivePost } from 'src/actions/posts';

const mapStateToProps = (state, ownProps) => ({
  onePost: findPost(state, ownProps.match.params.slug),
  showEmailToggler: state.posts.showEmailToggler,
  ownerPostMail: state.posts.ownerPostMail,
});

const mapDispatchToProps = (dispatch) => (
  {
    showEmail: () => {
      dispatch(showEmail());
    },
    getUser: (value) => {
      dispatch(getUser(value));
    },

    archivePost: (value) => {
      dispatch(archivePost(value));
    },
  });

const container = connect(mapStateToProps, mapDispatchToProps)(OnePost);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
