import { connect } from "react-redux";

import CardsUsers from "src/components/Cards/Users";

import { setFavoris } from "src/redux/actions/users";

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  session: state.auth.session,
});

const mapDispatchToProps = (dispatch) => ({
  setFavoris: (id, target) => {
    console.log("containers setFavoris", id, target);

    dispatch(setFavoris(id, target));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsUsers);
