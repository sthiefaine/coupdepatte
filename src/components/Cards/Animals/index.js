// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
import pictureURL from 'src/services/pictures';
import {
  MaleIcon,
  FemaleIcon,
  ShareIcon,
  PinIcon,
  HeartIcon,
} from 'src/selectors/icons';

import { getAnimalsUser } from 'src/selectors/animals';

import './styles.scss';
import departements from 'src/data/departements';
// == Import

// == Composant
const CardsAnimals = ({
  animal,
  usersList,
  isLogged,
  favoris,
  setFavoris,
  session,
}) => {
  const logoGender = animal.gender === false ? (
    <MaleIcon colorFill="blue" />
  ) : (
    <FemaleIcon colorFill="red" />
  );

  const animalsOwner = getAnimalsUser(animal.user_id, usersList);

  const IMTheOwner = session?.id === animal.user_id;

  const alreadyLiked = session.id ? Object.values(session?.favorites).find((favorite) => (favorite === animal._id)) : false;

  const resultat = (departmentNumber) => {
    const test = departements.find((departement) => (departement.numero === departmentNumber));

    if (typeof test?.numero !== 'undefined') {
      return (
        `${test?.numero} ${test?.name}`
      );
    }
  };

  const handleOnClickSetFavoris = () => {
    console.log('handleOnClickSetFavoris', 'ok');
    setFavoris(session.id, animal._id);
  };

  return (
    <article className="card">
      <div className="card__top">
        <img className="card__top__picture" src={`${pictureURL}${animal.avatar}`} alt={animal.name} />
        <div className="card__informations">

          <h2 className="card__informations__name">{animal.name}</h2>
          <span className="card__informations_complement__gender">{logoGender}</span>

          <div className="card__informations__complement">
            <p className="card__informations_complement__age">{animal.age}</p>
            {animalsOwner?.localisation?.department && (
              <span className="card__informations_complement__zipCode__numero"><PinIcon colorFill="black" />{resultat(animalsOwner?.localisation?.department)}</span>
            )}
          </div>
          <div className="card__informations__access">
            <Link
              to={`/profil/animals/${animal._id}`}
            >
              <button type="button" className="card__informations__access__btn">Voir +</button>
            </Link>

            {!IMTheOwner && session.id && (
              <>
                {!alreadyLiked && (

                  <span
                    className="card__informations__access__fave"
                    type="button"
                    onClick={handleOnClickSetFavoris}
                  >
                    <HeartIcon colorFill="black" />
                  </span>

                )}

                {alreadyLiked && (

                  <span
                    className="card__informations__access__fave"
                    type="button"
                    onClick={handleOnClickSetFavoris}
                  >
                    <HeartIcon colorFill="red" />
                  </span>

                )}

              </>
            )}

            <span className="card__informations__access__share"><ShareIcon colorFill="black" /></span>
          </div>
        </div>
      </div>
    </article>
  );
};
export default CardsAnimals;
