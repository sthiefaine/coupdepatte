import { connect } from "react-redux";

import CardsAnimals from "src/components/Cards/Animals";

import { setFavoris } from "src/redux/actions/users";

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  favoris: state.users.favoris,
  session: state.auth.session,
  scrollValue: state.nav.scrollToTop,
});

const mapDispatchToProps = (dispatch) => ({
  setFavoris: (id, target) => {
    console.log("containers setFavoris", id, target);

    dispatch(setFavoris(id, target));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsAnimals);
