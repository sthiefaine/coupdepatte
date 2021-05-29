// == Import npm
import React, { useEffect } from "react";

import { NavLink, Link } from "react-router-dom";

import pictureURL from "src/services/pictures";

// == Import
import "./styles.scss";
import emptyAvatar from "../../assets/img-avatar.png";
// == Composant
const Aside = ({
  handleTogglerClick,
  isLogged,
  logout,
  asideIsOpen,
  session,
  scrollToTop,
}) => {
  // if we want to logout we set logout action to true
  const handelonClickLougout = () => {
    logout(true);
  };

  // close the aside when we click on login or signup
  const handleOnClick = () => {
    handleTogglerClick();
  };

  // https://fr.reactjs.org/docs/refs-and-the-dom.html
  // ref created to allow us to click outside the aside and close it.
  const container = React.createRef();

  const handleTogglerClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      // automatic scroll to top of the page disabled when we click on the aside
      scrollToTop(false);

      console.log("handleTogglerClickOutside", event.target);
      handleTogglerClick();

      document.removeEventListener("mousedown", handleTogglerClickOutside);
    }
  };

  if (asideIsOpen === true) {
    document.addEventListener("mousedown", handleTogglerClickOutside);
  }

  const asideClasse = asideIsOpen === true ? "aside__open" : "aside__close";

  const userAvatar =
    isLogged === true ? `${pictureURL}${session.avatar}` : `${emptyAvatar}`;

  return (
    <>
      <aside ref={container} className={`aside ${asideClasse}`}>
        <div className="aside__top">
          <div className="aside__top__user">
            {!isLogged && (
              <div className="aside__top__user__information">
                <img
                  className="aside__top__user__information__avatar"
                  src={userAvatar}
                  alt="avatar"
                />

                <span className="aside__top__user__information__title">
                  Bienvenue
                </span>
              </div>
            )}

            {isLogged && (
              <div className="aside__top__user__information">
                <img
                  className="aside__top__user__information__avatar"
                  src={userAvatar}
                  alt="avatar"
                />

                <span className="aside__top__user__information__title">
                  Bienvenue {session.username}
                </span>
              </div>
            )}
            {!isLogged && (
              <div className="aside__top__user__element">
                <Link to="/login" onClick={handleOnClick}>
                  <button
                    className="aside__top__user__element__button"
                    type="button"
                  >
                    Connexion
                  </button>
                </Link>

                <Link to="/signup" onClick={handleOnClick}>
                  <button
                    className="aside__top__user__element__button"
                    type="button"
                  >
                    Inscription
                  </button>
                </Link>
              </div>
            )}

            {isLogged && (
              <div className="aside__top__user__element">
                <Link to="/" onClick={handelonClickLougout}>
                  <button
                    className="aside__top__user__element__button deconnexion"
                    type="button"
                  >
                    Déconnexion
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>

        <nav className="aside__mid">
          <ul className="aside__mid__list">
            <NavLink
              to="/"
              exact
              className="aside__mid__list__element"
              activeClassName="aside__link--active"
              onClick={handleOnClick}
            >
              &#128570; Accueil
            </NavLink>
          </ul>

          {isLogged && (
            <ul className="aside__mid__list">
              <h2 className="aside__mid__list__h2 sectionTitle">
                Utilisateurs :
              </h2>

              <NavLink
                to={`/profil/${session?.role}/${session?.id}/`}
                exact
                activeClassName="aside__link--active"
                id="profil"
                onClick={handleOnClick}
              >
                <li className="aside__mid__list__element">
                  &#128570; Mon Profil
                </li>
              </NavLink>

              {session?.role === "association" && (
                <>
                  <NavLink
                    to="/add"
                    exact
                    activeClassName="aside__link--active"
                    id="add"
                    onClick={handleOnClick}
                  >
                    <li className="aside__mid__list__element">
                      &#128570; Ajouter un animal
                    </li>
                  </NavLink>
                </>
              )}

              <NavLink
                to="/fav"
                exact
                activeClassName="aside__link--active"
                id="fav"
                onClick={handleOnClick}
              >
                <li className="aside__mid__list__element">
                  &#128570; Mes favoris
                </li>
              </NavLink>
            </ul>
          )}

          {!isLogged && <></>}

          <ul className="aside__mid__list">
            <h2 className="aside__mid__list__h2 sectionTitle">Listes :</h2>

            {isLogged && (
              <>
                <NavLink
                  to="/lists/animals"
                  exact
                  activeClassName="aside__link--active"
                  id="chats"
                  onClick={handleOnClick}
                >
                  <li className="aside__mid__list__element">&#128570; Chats</li>
                </NavLink>

                <NavLink
                  to="/lists/associations"
                  exact
                  activeClassName="aside__link--active"
                  id="associations"
                  onClick={handleOnClick}
                >
                  <li className="aside__mid__list__element">
                    &#128570; Associations
                  </li>
                </NavLink>

                {session?.role === "association" && (
                  <NavLink
                    to="/lists/utilisateurs"
                    exact
                    activeClassName="aside__link--active"
                    id="utilisateurs"
                    onClick={handleOnClick}
                  >
                    <li className="aside__mid__list__element">
                      &#128570; Utilisateurs
                    </li>
                  </NavLink>
                )}
              </>
            )}

            {!isLogged && (
              <>
                <NavLink
                  to="/lists/animals"
                  exact
                  activeClassName="aside__link--active"
                  id="chats"
                  onClick={handleOnClick}
                >
                  <li className="aside__mid__list__element">
                    &#128570; Nos Chats
                  </li>
                </NavLink>

                <NavLink
                  to="/lists/associations"
                  exact
                  activeClassName="aside__link--active"
                  id="associations"
                  onClick={handleOnClick}
                >
                  <li className="aside__mid__list__element">
                    &#128570; Nos Associations
                  </li>
                </NavLink>
              </>
            )}
          </ul>
        </nav>
        <div className="aside__bottom">&#128570;</div>
      </aside>
    </>
  );
};

export default Aside;
