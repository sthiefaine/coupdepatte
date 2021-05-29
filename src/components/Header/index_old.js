// == Import npm
import React from 'react';
import BurgerMenu from 'src/containers/BurgerMenu';
import Nav from 'src/containers/Nav';
import Logo from 'src/assets/logo.svg';

import { Redirect } from 'react-router-dom';
// == Import

import './styles.scss';

// == Composant
const Header = ({ open }) => {
  const test = () => {
    (window.location = '/');
  };

  return (
    <>
      <header className="header">
        <button onClick={test}>
          <img className="header__logo" alt="logo" src={Logo} />
        </button>
        <h1 className="header__title">Un P'tit Coup de Patte</h1>
        <BurgerMenu />
      </header>

      {open && (
        <Nav />

      )}

    </>
  );
};

export default Header;
