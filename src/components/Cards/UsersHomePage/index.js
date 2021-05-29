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

import './styles.scss';

// == Import

// == Composant
const UsersHomePage = ({
  user,
  usersList,
  isLogged,
  session,
  setFavoris,
}) => {
  const userId = localStorage.getItem('id');

  const mayICanEdit = session?.id === user._id;
  const alreadyLiked = session.id ? Object.values(session?.favorites).find((favorite) => (favorite === user._id)) : false;

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
    setFavoris(session.id, user._id);
  };

  return (
    <article className="cardHomePage">
      <div className="cardHomePage__left">
        <img className="cardHomePage__left__picture" src={`${pictureURL}${user.avatar}`} alt={user.username} />
      </div>

      <div className="cardHomePage__right">
        <div className="cardHomePage__right__info">
          <h2 className="cardHomePage__right__info__name">{user.username}</h2>
          <div className="miniCardPage__right__info__divZipCode">
            <span className="cardHomePage__right__info__zipCode"><PinIcon colorFill="#FFC880" /> {resultat(user.localisation?.department)}</span>
          </div>
        </div>
        <div className="cardHomePage__right__divBtn">
          <Link
            to={`/profil/${user?.role}/${user._id}`}
          >
            <button type="button" className="cardHomePage__right__divBtn__btn">Voir +</button>
          </Link>
          <div className="miniCardPage__right__info__access">

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
export default UsersHomePage;
