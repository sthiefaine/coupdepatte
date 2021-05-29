// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import { Link } from 'react-router-dom';

// == Composant
const Presentation = ({ session, isLogged }) => {
  return (
    <>
      <section className="sectionTop">

        <div className="sectionTop__presentation">

          <div className="sectionTop__presentation__text">
            <p>Nos boules de poils ont besoin de vous</p>
            {!isLogged && (
              <button type="button" className="sectionTop__presentation__button">
                <Link to="/signup">Inscris toi</Link>
              </button>
            )}

          </div>
        </div>

      </section>
    </>
  );
};
export default Presentation;
