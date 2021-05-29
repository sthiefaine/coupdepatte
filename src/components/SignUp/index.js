// == Import npm
import React, { useEffect } from 'react';
/* import PropTypes from 'prop-types'; */

import { NavLink, Link } from 'react-router-dom';

import './styles.scss';

// == Composant
const SignUp = ({
  selectRole,
}) => {
  const handleOnClickSelectRole = (role) => {
    console.log('handleOnClickSelectRole', role);
    selectRole(role);
  };

  return (
    <div className="transitionPage">
      
      <Link
        to="/signup/utilisateurs"
        onClick={() => handleOnClickSelectRole('foster')}
      >
        <button
          type="button"
          className="transitionPage__btn"
        >
          <span
            className="iconDiv"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="5 12 3 12 12 3 21 12 19 12" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
          </span>
          Famille d'accueil
        </button>
      </Link>

      <Link
        to="/signup/associations"
        onClick={() => handleOnClickSelectRole('association')}
      >
        <button
          type="button"
          className="transitionPage__btn"
        >
          <span
            className="iconDiv"

          >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-warehouse" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M3 21v-13l9-4l9 4v13" />
              <path d="M13 13h4v8h-10v-6h6" />
              <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" />
            </svg>
          </span>
          Associations
        </button>
      </Link>
    </div>
  );
};

export default SignUp;
