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

import departements from 'src/data/departements';

// == Import

// == Composant
const CardsUsers = ({
  user,
  usersList,
  isLogged,
  session,
  setFavoris,
}) => {
  const mayICanEdit = session?.id === user._id;
  const alreadyLiked = session.id ? Object.values(session?.favorites).find((favorite) => (favorite === user._id)) : false;

  const resultat = (departmentNumber) => {
    const test = departements.find((departement) => (departement.numero === departmentNumber));

    return (
      `${test.numero}  ${test.name}`

    );
  };

  const handleOnClickSetFavoris = () => {
    console.log('handleOnClickSetFavoris', 'ok');
    setFavoris(session.id, user._id);
  };

  return (
    <article className="card">
      <div className="card__top">
        <img className="card__top__picture" src={`${pictureURL}${user.avatar}`} alt={user.username} />
        <div className="card__informations">

          <h2 className="card__informations__name">{user.username}</h2>

          <div className="card__informations__complement">
            <p className="card__informations_complement__age">{user.age}</p>
            <span className="card__informations_complement__zipCode__numero"><PinIcon colorFill="black" />{resultat(user.localisation?.department)}</span>

          </div>
          <div className="card__informations__access">
            <Link
              to={`/profil/${user?.role}/${user._id}`}
            >
              <button type="button" className="card__informations__access__btn">Voir +</button>
            </Link>

            {!mayICanEdit
            && session.id
            && session?.role !== 'association'
            && (session?.role === 'foster' && user?.role === 'association')
            && (
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
export default CardsUsers;
