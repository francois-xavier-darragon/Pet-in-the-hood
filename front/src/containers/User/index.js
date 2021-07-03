import { connect } from 'react-redux';
import User from 'src/components/User';

import { showEditForm, submitNewPet, saveBreeds,
  changeInputCreatePet, changePhone, changeFirstName, changeName, changeEmail, patchUser,
  changeAddress, submitLosted, OnePetUser, getAllBreed, newPictureChange, changeLat, changeLon} from 'src/actions/user';

import { pictureChange, submitPicture } from 'src/actions/createUser';
import { changePosition } from 'src/actions/createPost';

const mapStateToProps = (state) => ({
  savePosts: state.posts.allPosts,
  toggleEditProfil: state.user.toggleEditProfil,
  actualUser: state.user.actualUser,
  nom: state.newPet.nom,
  type: state.newPet.type,
  race: state.newPet.race,
  desc: state.newPet.desc,
  picture: state.user.actualUser.picture,
  FirstNameInput: state.user.FirstNameInput,
  NameInput: state.user.NameInput,
  EmailInput: state.user.EmailInput,
  PhoneInput: state.user.userAddress.lon,
  AddressInput: state.user.userAddress.lat,
  allBreeds: state.user.allBreeds,
  tattoo: state.newPet.tattoo,
  idCard: state.newPet.idCard,
  isLogged: state.user.isLogged,
  center: state.createPost.center,
  longitude: state.createPost.center.lng,
  latitude: state.createPost.center.lat,
});

const mapDispatchToProps = (dispatch) => (
  {
    showEditForm: () => {
      dispatch(showEditForm());
    },
    submitNewPet: () => {
      dispatch(submitNewPet());
    },
    changeInputCreatePet: (value, target) => {(
      dispatch(changeInputCreatePet(value, target))
    )},
    changeName: (value) => {
      dispatch(changeName(value));
    },

    changeFirstName: (value) => {
      dispatch(changeFirstName(value));
    },

    changeEmail: (value) => {
      dispatch(changeEmail(value));
    },

    changeLon: (value) => {
      dispatch(changeLon(value));
    },

    changeLat: (value) => {
      dispatch(changeLat(value));
    },
    pictureChange: (value) => {
      dispatch(pictureChange(value));
    },

    submitPicture: () => {
      dispatch(submitPicture());
    },

    submitLosted: (value) => {
      dispatch(submitLosted(value));
    },
    OnePetUser: () => {
      dispatch(OnePetUser());
    },
    getAllBreed: () => {
      dispatch(getAllBreed());
    },
    saveBreeds: (value) => {
      dispatch(saveBreeds(value));
    },
    newPictureChange: (value) => {
      dispatch(newPictureChange(value));
    },
    patchUser: () => {
      dispatch(patchUser());
    },

    changePosition: (value) => {
      dispatch(changePosition(value));
    },

  });

export default connect(mapStateToProps, mapDispatchToProps)(User);
