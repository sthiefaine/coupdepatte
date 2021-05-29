import { connect } from "react-redux";

import Lists from "src/components/Lists";

import { scrollToTop } from "src/redux/actions";

const mapStateToProps = (state) => ({
  scrollValue: state.nav.scrollToTop,
  asideIsOpen: state.nav.asideIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  scrollToTop: (value) => {
    dispatch(scrollToTop(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
