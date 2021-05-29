import { connect } from 'react-redux';
import Section from 'src/components/Section';

const mapStateToProps = (state) => ({
  animalsList: state.lists.animalsList,
  usersList: state.lists.usersList,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Section);
