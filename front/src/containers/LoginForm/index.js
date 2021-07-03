import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { changeEmail, changePassword, connectUser } from 'src/actions/user';
/* On transmet les données du state au copmposant */
const mapStateToProps = (state) => ({
  emailInput: state.user.emailInput,
  passwordInput: state.user.passwordInput,
  isLogged: state.user.isLogged,
});
/* On dispatch les actions pour modifier le state */
const mapDispatchToProps = (dispatch) => (
  {
    changeEmail: (value) => {
      dispatch(changeEmail(value));
    },
    changePassword: (value) => {
      dispatch(changePassword(value));
    },
    connectUser: () => {
      dispatch(connectUser());
    },
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
