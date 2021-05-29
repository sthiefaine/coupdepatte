// == Import npm
import React from 'react';

// == Import
import CardsAnimals from 'src/containers/Cards/Animals';
import CardsUsers from 'src/containers/Cards/Users';
import { Link } from 'react-router-dom';

import './styles.scss';

// == Composant
const Favoris = ({ animalsList, usersList, session }) => {
  const dataAnimals = [];
  animalsList.forEach((animal) => {
    Object.values(session.favorites).forEach((favorite) => {
      if (favorite === animal._id) {
        dataAnimals.push(animal);
      }
    });
  });

  const CardsAnimalsPrev = dataAnimals.map((animal) => {
    return (
      <CardsAnimals
        key={animal._id}
        animal={animal}
        usersList={usersList}
      />
    );
  });

  const dataUsers = [];
  usersList.forEach((user) => {
    Object.values(session.favorites).forEach((favorite) => {
      if (favorite === user._id) {
        dataUsers.push(user);
      }
    });
  });

  const CardsUsersPrev = dataUsers.map((user) => {
    return (
      <CardsUsers
        key={user._id}
        user={user}
        usersList={usersList}
      />
    );
  });

  return (
    <>

      <section className="first__section">

        <h2 className="home__title">Vos Animaux favoris</h2>

        {dataAnimals.length > 0 && (

          <div className="grid">

            {CardsAnimalsPrev}

          </div>

        )}

        {dataAnimals.length <= 0 && (
          <>
            <div className="fav">
              <div className="fav__text">Vous n'avez pas encore de chat en favoris.</div>

              <div className="fav__text"> N'hésitez pas à aller consulter la liste de nos chats en detresse, ils ont besoin de vous</div>

              <Link
                to="/lists/animals"
              >
                <button className="fav__button__cat" type="button">Liste des chats</button>
              </Link>
            </div>
          </>
        )}

      </section>

      {session?.role === 'foster' && (

      <section className="first__section">

        <h2 className="home__title">Vos Associations favorites</h2>

        {dataUsers.length > 0 && (

        <div className="grid">

          {CardsUsersPrev}

        </div>

        )}

        {dataUsers.length <= 0 && (
        <>
          <div className="fav">
            <div className="fav__text">Vous n'avez pas encore d'associations en favoris.</div>

            <div className="fav__text"> N'hésitez pas à aller consulter la liste de nos associations, elles ont besoin de vous</div>

            <Link
              to="/lists/associations"
            >
              <button className="fav__button__asso" type="button">Liste des Associations</button>
            </Link>
          </div>
        </>
        )}

      </section>

      )}

    </>
  );
};

// == Export
export default Favoris;
