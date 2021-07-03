import { connect } from 'react-redux';
import CreatePost from 'src/components/Createpost';
import { changeTitle, changeDescription, changeDate } from 'src/actions/user';
import { changePosition, matchCoord, submitAdvert, submitHandleChangePicture, changeAddressUser } from 'src/actions/createPost';

const mapStateToProps = (state) => ({
  titleInput: state.user.titleInput,
  addressInput: state.user.addressInput,
  descriptionInput: state.user.descriptionInput,
  dateInput: state.user.dateInput,
  center: state.createPost.center,
  actualUserAddress: state.user.actualUser.address,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => (
  {
    changeTitle: (value) => {
      dispatch(changeTitle(value));
    },
    changeAddress: (value) => {
      dispatch(changeAddress(value));
    },
    changeDescription: (value) => {
      dispatch(changeDescription(value));
    },
    changeDate: (value) => {
      dispatch(changeDate(value));
    },
    changePosition: (value) => {
      dispatch(changePosition(value));
    },
    matchCoord: () => {
      dispatch(matchCoord());
    },
    submitAdvert: () => {
      dispatch(submitAdvert());
    },
    submitHandleChangePicture: (value) => {
      dispatch(submitHandleChangePicture(value));
    },
    changeAddressUser: (value) => {
      dispatch(changeAddressUser(value));
    },
  });
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
