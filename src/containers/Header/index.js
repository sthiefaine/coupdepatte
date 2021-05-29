import { connect } from "react-redux";
import Header from "src/components/Header";

import { handleTogglerClick } from "src/redux/actions";

const mapStateToProps = (state) => ({
  open: state.nav.asideIsOpen,
  session: state.auth.session,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleTogglerClick: () => {
    dispatch(handleTogglerClick());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
