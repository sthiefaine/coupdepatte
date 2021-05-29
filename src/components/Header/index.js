// == Import npm
import React, { useEffect } from 'react';
// import Logo from 'src/assets/logo.svg';
import BurgerMenu from 'src/containers/BurgerMenu';

import { Redirect, NavLink, Link } from 'react-router-dom';

import { Logo } from 'src/selectors/icons';
// == Import

import './styles.scss';

// == Composant
const Header = ({
  session,
  isLogged,
  open,
  handleTogglerClick,
}) => {
/*   const test = () => {
    (window.location = '/');
  }; */

  const handleOnClick = (event) => {
    if (open) {
      handleTogglerClick();
    }
  };

  return (
    <>
      <header className="header">
        <BurgerMenu />

        <div className="header__middle">

          <NavLink
            to="/"
            exact
            id="home"
            onClick={handleOnClick}
          >

            <button
              type="button"
              className="header__button"
            >
              <h1 className="header__button__title">Un P'tit Coup de Patte</h1>
              <Logo />

            </button>

          </NavLink>
        </div>

        {!isLogged && (

        <div className="header__right">
          <NavLink
            className="header__right__link"
            to="/login"
          >Connexion
          </NavLink>

          <NavLink
            className="header__right__link"
            to="/signup"
          >Inscription
          </NavLink>
        </div>

        )}

        {isLogged && (

        <div className="header__right">
          <span>Bienvenue {session?.username}</span>
        </div>

        )}

      </header>

    </>
  );
};

export default Header;
