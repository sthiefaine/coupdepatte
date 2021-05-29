import { connect } from "react-redux";
import BurgerMenu from "src/components/BurgerMenu";
import { handleTogglerClick } from "src/redux/actions";

const mapStateToProps = (state) => ({
  open: state.nav.open,
});

const mapDispatchToProps = (dispatch) => ({
  handleTogglerClick: () => {
    dispatch(handleTogglerClick());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerMenu);
