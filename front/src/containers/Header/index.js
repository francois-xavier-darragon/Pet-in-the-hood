import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { loggedOut, saveUser } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  pseudo: state.user.pseudo,
  picture: state.user.actualUser.picture,
});

const mapDispatchToProps = (dispatch) => (
  {
    loggedOut: () => {
      dispatch(loggedOut());
    },
    saveUser: () => {
      dispatch(saveUser());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
