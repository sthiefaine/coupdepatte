// == Import npm
import React from "react";
import ImgJulie from "src/assets/Julie.jpeg";
import ImgClement from "src/assets/Clément.jpeg";
import ImgThief from "src/assets/Thiéfaine.jpeg";
import ImgThomas from "src/assets/Thomas.jpeg";
import ImgTom from "src/assets/Tom.jpeg";

// == Import

import "./styles.scss";

// == Composant
const About = () => {
  return (
    <article className="about">
      <h2 className="about__title"> Qui sommes nous?</h2>

      <div className="about__text">
        {" "}
        5 étudiants d'Oclock convaincus de l'importance du bien-être animal se
        sont réunis autour du projet
      </div>

      <div className="about__fiches">
        <div className="fiche">
          <div className="face front">
            <img className="img" src={ImgJulie} alt="imageDePrésentation" />
          </div>

          <div className="face back">
            <h2>Julie</h2>

            <div className="about__bloc__text__p">
              <p>Product Owner</p>

              <p className="about__bloc__text__p__singleP">
                Developpeuse
                <br />
                back-end (Node.js)
              </p>
            </div>
          </div>
        </div>

        <div className="fiche">
          <div className="face front">
            <img className="img" src={ImgClement} alt="imageDePrésentation" />
          </div>

          <div className="face back">
            <h2>Clément</h2>

            <div className="about__bloc__text__p">
              <p>Lead Back</p>

              <p>
                Developpeur
                <br />
                back-end (Node.js)
              </p>
            </div>
          </div>
        </div>

        <div className="fiche">
          <div className="face front">
            <img className="img" src={ImgThief} alt="imageDePrésentation" />
          </div>

          <div className="face back">
            <h2>Thiéfaine</h2>

            <div className="about__bloc__text__p">
              <p>Git Master</p>

              <p>
                Developpeur
                <br />
                Front-end (react)
              </p>
            </div>
          </div>
        </div>

        <div className="fiche">
          <div className="face front">
            <img className="img" src={ImgThomas} alt="imageDePrésentation" />
          </div>

          <div className="face back">
            <h2>Thomas</h2>

            <div className="about__bloc__text__p">
              <p>Scrum Master</p>

              <p>
                Developpeur
                <br />
                Front-end (react)
              </p>
            </div>
          </div>
        </div>

        <div className="fiche">
          <div className="face front">
            <img className="img" src={ImgTom} alt="imageDePrésentation" />
          </div>

          <div className="face back">
            <h2>Tom</h2>

            <div className="about__bloc__text__p">
              <p>Lead Front</p>

              <p>
                Developpeur
                <br />
                Front-end (react)
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default About;
