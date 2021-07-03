import { connect } from 'react-redux';
import CreateUser from 'src/components/CreateUser';
import { changeInputCreateUser, submitNewUser, pictureChange, changeRedirect, matchCoord, toggleAddress } from 'src/actions/createUser';

const mapStateToProps = (state) => ({
  firstName: state.createUser.firstName,
  lastName: state.createUser.lastName,
  email: state.createUser.email,
  password: state.createUser.password,
  passwordConfirm: state.createUser.passwordConfirm,
  picture: state.createUser.picture,
  redirect: state.createUser.redirect,
  rue: state.createUser.rue,
  ville: state.createUser.ville,
  zipCode: state.createUser.zipCode,
  checked: state.createUser.checked,
  addressToggler: state.createUser.addressToggler,
});

const mapDispatchToProps = (dispatch) => (
  {
    changeInputCreateUser: (value, target) => {
      dispatch(changeInputCreateUser(value, target));
    },
    submitNewUser: () => {
      dispatch(submitNewUser());
    },
    pictureChange: (value) => {
      dispatch(pictureChange(value));
    },
    changeRedirect: () => {
      dispatch(changeRedirect());
    },
    matchCoord: (value) => {
      dispatch(matchCoord(value));
    },
    toggleAddress: () => {
      dispatch(toggleAddress());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
