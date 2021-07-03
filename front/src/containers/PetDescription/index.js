import { connect } from 'react-redux';

import { findPet } from 'src/selectors/findPet';
import PetDescription from 'src/components/PetDescription';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  onePet: state.banner.queryResult,
  onePetUser: state.user.onePetUser,
  onePetUserSearch: findPet(state, ownProps.match.params.slug),

});

const mapDispatchToProps = (dispatch) => (
  {
  }
);


const container = connect(mapStateToProps, mapDispatchToProps)(PetDescription);

const containerWithRouter = withRouter(container);

export default containerWithRouter;


// findPet(state, ownProps.match.params.slug),

