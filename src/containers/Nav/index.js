import { connect } from 'react-redux';
import Nav from 'src/components/Nav';

const mapStateToProps = (state) => ({
  open: state.nav.open,
  isLogged: state.auth.isLogged,
  usersList: state.lists.usersList,
  session: state.auth.session,

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
