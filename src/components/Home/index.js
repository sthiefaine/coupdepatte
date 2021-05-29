// == Import npm
import React, { useEffect } from "react";

// == Import
import Presentation from "src/containers/Presentation";
import CardsAnimals from "src/containers/Cards/Animals";
import Loader from "src/components/Loader";
import imgPatte from "src/assets/pattedechat.jpg";

import { sortUsersByRoles } from "src/selectors/user";

import "./styles.scss";
import { Link } from "react-router-dom";

import UsersHomePage from "src/containers/Cards/CardsAssoHomePage";

// == Composant
const Home = ({ animalsList, usersList }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const UsersListWhereUserRoleIsEqualToAssociations = sortUsersByRoles(
    "association",
    usersList
  );

  const CardsUsersPrev = UsersListWhereUserRoleIsEqualToAssociations.slice(
    0,
    3
  ).map((user) => {
    return <UsersHomePage key={user._id} user={user} usersList={usersList} />;
  });

  const CardsAnimalsPrev = animalsList.slice(0, 4).map((animal) => {
    return (
      <CardsAnimals key={animal._id} animal={animal} usersList={usersList} />
    );
  });

  return (
    <>
      <Presentation />

      <section className="resume__section">
        <h2 className="home__title">Bienvenue</h2>

        <div className="resume__flex">
          <div className="resume__text">
            <p className="resume__presentation">
              Un p'tit coup de patte est la plateforme permettant de vous mettre
              facilement en contact avec l'association dans le besoin la plus
              proche de chez vous.{" "}
            </p>
            <br />
            <p>
              {" "}
              Chaque année, c'est environ 100 000 animaux qui sont abandonnés,
              soit environ 60 000 pendant les vacances d'été. Beaucoup d'appels
              à l'aide se lancent sur les reseaux sociaux afin de trouver
              rapidement une famille pouvant accueillir un animal le temps de
              lui trouver sa famille pour la vie.{" "}
            </p>
            <br />
            <p>
              {" "}
              Notre objectif est de permettre et faciliter la mise en relation
              entre une association et une famille d'accueil disponible selon
              les criteres de chacun{" "}
            </p>
          </div>

          <div className="resume__photo">
            <img className="photopatte" src={imgPatte} alt="patte de chat" />
          </div>
        </div>
      </section>

      <section className="first__section">
        <h2 className="home__title">Les chats en détresse</h2>

        <div className="grid">
          {usersList.length === 0 && <Loader />}
          {usersList.length > 0 && CardsAnimalsPrev}
        </div>

        <Link to="/lists/animals" className="showmore__link">
          <button className="showmore__link__button" type="button">
            Voir plus ...
          </button>
        </Link>
      </section>

      <section className="second__section">
        <h2 className="home__title">Les associations qui ont besoin de vous</h2>

        <div className="grid">
          {animalsList.length === 0 && <Loader />}
          {animalsList.length > 0 && CardsUsersPrev}
        </div>

        <Link to="/lists/associations" className="showmore__link">
          <button className="showmore__link__button" type="button">
            Voir plus ...
          </button>
          {/* <div className="showmore__link__button__border" /> */}
        </Link>
      </section>
    </>
  );
};

// == Export
export default Home;
