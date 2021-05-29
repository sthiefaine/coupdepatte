import { connect } from 'react-redux';
import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  animalsList: state.lists.animalsList,
  usersList: state.lists.usersList,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
