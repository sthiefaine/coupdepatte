import { connect } from "react-redux";
import Aside from "src/components/Aside";
import {
  handleTogglerClick,
  handleClickNavLink,
  scrollToTop,
} from "src/redux/actions";

import { logout } from "src/redux/actions/auth";

const mapStateToProps = (state) => ({
  asideIsOpen: state.nav.asideIsOpen,
  isLogged: state.auth.isLogged,
  session: state.auth.session,
  usersList: state.lists.usersList,
  scrollValue: state.nav.scrollToTop,
});

const mapDispatchToProps = (dispatch) => ({
  handleTogglerClick: () => {
    dispatch(handleTogglerClick());
  },

  handleClickNavLink: (linkvalue) => {
    console.log("handleClickNavLink", linkvalue);
    dispatch(handleClickNavLink(linkvalue));
  },

  logout: (value) => {
    dispatch(logout(value));
  },
  scrollToTop: (value) => {
    dispatch(scrollToTop(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
