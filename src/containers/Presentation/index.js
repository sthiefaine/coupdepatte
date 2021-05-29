import { connect } from "react-redux";
import Presentation from "src/components/Presentation";

import { handleTogglerClick } from "src/redux/actions";

const mapStateToProps = (state) => ({
  session: state.auth.session,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleTogglerClick: () => {
    dispatch(handleTogglerClick());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
