// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
// == Import

import './styles.scss';

// == Composant
const Footer = () => (

  <>
    <footer className="footer">

      <ul className="footer__list">
        <li className="footer__element">
          <div className="footer__element__copyright text">
            © 2020
          </div>
        </li>
        <li className="footer__element">
          <div className="footer__element__button__about text">
            <Link to="/About">Qui sommes nous</Link>
          </div>
        </li>
        <li className="footer__element">
          <div className="footer__element__button__contact text">
            <Link to="/Contact">Contact</Link>
          </div>
        </li>
        <li className="footer__element">
          <div className="footer__element__button__Mlegal text">
            <Link to="/MentionLegal">Mentions Légales</Link>
          </div>
        </li>
      </ul>
    </footer>
  </>

);

export default Footer;
