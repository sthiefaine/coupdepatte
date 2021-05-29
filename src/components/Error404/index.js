// == Import npm
import React from 'react';
import cat from 'src/assets/404/cat.jpg';
// == Import

import './styles.scss';

// == Composant
const Error404 = () => {
  return (
    <article className="error">
      <h2 className="error__subTitle1">Erreur 404</h2>
      <div className="error__block">

        <div className="error__block__img">
          <img
            className="error__block__img__chat"
            src={cat}
            alt="imageerror"
          />
        </div>

        <div className="error__block__title">
          <p>Cette page n'existe pas...</p>
        </div>

      </div>

    </article>
  );
};
export default Error404;
