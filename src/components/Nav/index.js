// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
// == Import

import Logo2 from 'src/assets/logo2.png';

import './styles.scss';

// == Composant
const Nav = ({
  usersList,
  isLogged,
  session,
}) => {
  return (

    <div className="navBar">

      <NavLink
        to="/lists/animals"
        exact
        type="button"
        className="navBar__button"
        activeClassName="navBar__button--active"
      >
        Chats
      </NavLink>
      <NavLink
        to="/lists/associations"
        exact
        type="button"
        className="navBar__button"
        activeClassName="navBar__button--active"
      >
        Associations
      </NavLink>

      {isLogged && session.role === 'association' && (
      <NavLink
        to="/lists/utilisateurs"
        exact
        type="button"
        className="navBar__button"
        activeClassName="navBar__button--active"
      >
        Familles d'accueil
      </NavLink>
      )}

    </div>
  );
};
export default Nav;
