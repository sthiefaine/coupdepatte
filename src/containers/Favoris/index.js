import { connect } from 'react-redux';
import Favoris from 'src/components/Favoris';

const mapStateToProps = (state) => ({
  animalsList: state.lists.animalsList,
  usersList: state.lists.usersList,
  session: state.auth.session,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Favoris);
