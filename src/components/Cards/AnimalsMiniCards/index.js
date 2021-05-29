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
const AnimalsMiniCards = ({
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
    <article className="miniCardPage">
      <div className="miniCardPage__left">
        <img
          className="card__top__picture" src={`${pictureURL}${animal.avatar}`} 
          alt={animal.name}
        />

      </div>

      <div className="miniCardPage__right">
        <div className="miniCardPage__right__info">
          <h2 className="miniCardPage__right__info__name">{animal.name}{logoGender}</h2>
          {animalsOwner?.localisation?.department && (

            <div className="miniCardPage__right__info__divZipCode">
              <span className="miniCardPage__right__info__zipCode"><PinIcon colorFill="#FFC880" />{resultat(animalsOwner?.localisation?.department)}</span>
            </div>

          )}
        </div>
        <div className="miniCardPage__right__divBtn">
          <Link
            to={`/profil/animals/${animal._id}`}
          >
            <button type="button" className="miniCardPage__right__divBtn__btn">Voir +</button>
          </Link>
          <div className="miniCardPage__right__info__access">
            {!IMTheOwner && session.id && (
            <>
              {!alreadyLiked && (

              <span
                className="miniCardPage__right__info__access__icon"
                type="button"
                onClick={handleOnClickSetFavoris}
              >
                <HeartIcon colorFill="black" />
              </span>

              )}

              {alreadyLiked && (

              <span
                className="miniCardPage__right__info__access__icon"
                type="button"
                onClick={handleOnClickSetFavoris}
              >
                <HeartIcon colorFill="red" />
              </span>

              )}

            </>
            )}
            <span className="miniCardPage__info__access__icon"><ShareIcon colorFill="black" /></span>

          </div>

        </div>

      </div>
    </article>
  );
};
export default AnimalsMiniCards;
