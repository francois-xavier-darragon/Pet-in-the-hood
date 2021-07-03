import { connect } from 'react-redux';
import Banner from 'src/components/Banner';
import { changeTatooInput, searchTatoo, toggleShowResult } from 'src/actions/banner';

const mapStateToProps = (state) => ({
  tatooInput: state.banner.tatooInput,
  queryResult: state.banner.queryResult,
  showResult: state.banner.showResult,
});

const mapDispatchToProps = (dispatch) => (
  {
    changeTatooInput: (value) => {
      dispatch(changeTatooInput(value));
    },
    searchTatoo: (value) => {
      dispatch(searchTatoo(value));
    },
    toggleShowResult: () => {
      dispatch(toggleShowResult());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
