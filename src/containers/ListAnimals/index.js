import { connect } from 'react-redux';
import ListAnimals from 'src/components/ListAnimals';

const mapStateToProps = (state) => ({
  animalsList: state.lists.animalsList,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ListAnimals);
