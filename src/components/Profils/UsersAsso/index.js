/* eslint-disable max-len */
// == Import npm
import React, { useEffect } from 'react';
import pictureURL from 'src/services/pictures';
// == Import

import './styles.scss';
import {
  ShareIcon,
  PinIcon,
  HeartIcon,
  TrashIcon,
  EditIcon,
  User,
  Infos,
} from 'src/selectors/icons';

import AnimalsMiniCards from 'src/containers/Cards/AnimalsMiniCards';

import CardsAnimals from 'src/containers/Cards/Animals';
import CardsUsers from 'src/containers/Cards/Users';

import departementsList from 'src/data/departements';

// == Composant
const Profil = ({
  session,
  setFavoris,
  usersList,
  animalsList,
  id,
  profilInfos,
  profilInfosEdit,
  edit,
  editValue,
  changeFieldProfil,
  saveEditUserAsso,
  del,
  delValue,
  delUserConfirm,
  saveUserProfilPicture,
  setProfilPicturePreview,
  avatar,
  errors,
  setErrorProfil,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (editValue) {
      edit();
    }
  }, []);

  console.log('profilInfos', profilInfos);

  console.log('profilInfosEDIT', changeFieldProfil);
  // const animalsOwner = getAnimalsUser(profilInfos.user_id, usersList);

  const VerifMail = (value) => {
    if (value.length < 1) {
      setErrorProfil('email', 'Required');
    }
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
      setErrorProfil('email', 'Invalid email address');
    }
    else {
      setErrorProfil('email', '');
    }
  };

  const VerifUserName = (value) => {
    console.log('Verifusername', value);
    const specialChars = /[^\w]/.test(value.trim());

    if (value.trim().length < 1) {
      setErrorProfil('username', 'Required');
    }

    else if (value.trim().length <= 3) {
      setErrorProfil('username', 'Quatre caractères minimum');
    }

    else if (specialChars) {
      setErrorProfil('username', 'Pas de caractères speciaux');
    }
    else {
      setErrorProfil('username', '');
    }
  };

  const VerifPassword = (value) => {
    const uppercase = /[A-Z]/.test(value);
    const lowercase = /[a-z]/.test(value);
    const number = /[0-9]/.test(value);
    const specialChars = /[^\w]/.test(value);

    if (value.length < 8 && value.length > 1) {
      setErrorProfil('password', 'Mot de passe trop court, il doit comptenir 8 caractères.');
    }
    else if (!lowercase && value.length > 1) {
      setErrorProfil('password', 'Le mot de passe doit comptenir au moins 1 minuscule.');
    }
    else if (!number && value.length > 1) {
      setErrorProfil('password', 'Le mot de passe doit comptenir au moins 1 chiffre.');
    }
    else {
      setErrorProfil('password', '');
    }
  };

  const VerifPasswordVerif = (value) => {
    if (value !== profilInfosEdit.password) {
      setErrorProfil('passwordVerif', 'Mot de passe non identique');
    }
    else {
      setErrorProfil('passwordVerif', '');
    }
  };

  const handleOnClickEdit = () => {
    console.log('je veux editer le profil de', profilInfos.username);
    Object.keys(profilInfos).forEach((element) => changeFieldProfil(profilInfos[element], element));
    changeFieldProfil('', 'password');
    edit();
  };

  const handleOnClickEditSave = () => {
    console.log('je veux sauvegarder le profil de', profilInfosEdit.username);
    if (
      profilInfosEdit.email.length > 0
    && profilInfosEdit.username.length > 0
    && typeof errors.email?.[0] === 'undefined'
    && typeof errors.password?.[0] === 'undefined'
    && typeof errors.username?.[0] === 'undefined'
    && typeof errors.passwordVerif?.[0] === 'undefined'
    ) {
      if (typeof document.querySelector('#avatar').files[0] === 'undefined') {
        saveEditUserAsso();
      }
      else {
        saveUserProfilPicture(document.querySelector('#avatar').files[0]);
      }
    }
  };

  const handleOnChangeProfil = (event) => {
    console.log('je veux editer le champ', event.target.id, event.target.value);
    changeFieldProfil(event.target.value, event.target.id);

    switch (event.target.id) {
      case 'username':
        VerifUserName(event.target.value);
        break;
      case 'password':
        VerifPassword(event.target.value);
        break;
      case 'email':
        VerifMail(event.target.value);
        break;
      case 'passwordVerif':
        VerifPasswordVerif(event.target.value);
        break;
      default:
    }
  };

  const border = (id, value) => {
    if ((typeof value === 'undefined') && (typeof errors[id]?.[0] === 'undefined')) {
      return '';
    }

    if ((value.length > 0) && (typeof errors[id]?.[0] === 'undefined')) {
      return 'surligne-green';
    }

    if ((value.length > 0) && (typeof errors[id]?.[0] !== 'undefined')) {
      return 'surligne-red';
    }
  };

  const handleOnClickDel = () => {
    console.log('je veux supprimer', profilInfosEdit.username);
    Object.keys(profilInfos).forEach((element) => changeFieldProfil(profilInfos[element], element));
    del();
  };
  const handleOnClickDelConfirm = () => {
    console.log('Adieu ', profilInfosEdit.username, ' tu vas nous manquer');
    delUserConfirm();
  };

  const handleOnChangePicture = (event) => {
    console.log('EDIT ChangePicture', event.target.files[0]);
    setProfilPicturePreview(event.target.files[0]);
  };

  const handleOnClickSetFavoris = () => {
    console.log('handleOnClickSetFavoris', 'ok');
    setFavoris(session.id, profilInfos._id);
  };

  const picture = avatar === '' ? profilInfosEdit.photo : `${pictureURL}${avatar}`;

  const mayICanEdit = session?.id === profilInfos._id;

  const alreadyLiked = session.id ? Object.values(session?.favorites).find((favorite) => (favorite === profilInfos._id)) : false;

  // Je veux filtrer les animaux du user
  const animalsSameUser = animalsList.filter((animals) => animals.user_id === profilInfos._id);
  const CardsAnimalsPrev = animalsSameUser.slice(0, 3).map((animal) => {
    return (
      <AnimalsMiniCards
        key={animal._id}
        animal={animal}
        usersList={usersList}
      />
    );
  });

  const CardsAllAnimalsPrev = animalsSameUser.map((animal) => {
    return (
      <CardsAnimals
        key={animal._id}
        animal={animal}
        usersList={usersList}
      />
    );
  });

  const departementMap = departementsList.map((departementlist) => {
    const selectedDepartment = departementlist.numero === profilInfosEdit.localisation?.department ? 'selected' : '';

    return (
      <option

        key={departementlist.numero}
        value={departementlist.numero}
        selected={selectedDepartment}
      >
        {`${departementlist.numero} - ${departementlist.name}`}
      </option>
    );
  });

  const resultat = (departmentNumber) => {
    const test = departementsList.find((departement) => (departement.numero === departmentNumber));

    return (
      `${test.numero}  ${test.name}`

    );
  };

  return (
    <>
      <div className="profil">
        <div className="profil__left">
          {!editValue && (
          <div
            alt={profilInfos.username}
            className="profil__picture"
            style={{
              backgroundImage: `url(${pictureURL}${profilInfos.avatar})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />

          )}

          {editValue && (
          <>

            <div
              alt=""
              className="profil__picture"
              style={{
                backgroundImage: `url(${picture})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <label
                className="profil__picture--add"
                htmlFor="avatar"
              >+
              </label>
            </div>

            <input
              type="file"
              id="avatar"
              name="avatar"
              onChange={handleOnChangePicture}
              accept="image/png, image/jpeg"
              style={{ display: 'none' }}
            />
          </>
          )}

        </div>

        <section className="profil__section">

          <div className="profil__section__informations">

            <div className="profil__section__informations__top">
              <div className="profil__section__informations__nameAndLocationSection">
                {!editValue && (
                  <h2 className="profil__section__informations__name users">{profilInfos.username}</h2>
                )}
                {editValue && (
                  <>
                    <input
                      id="username"
                      className={`profil__section__informations__name edit__input edit__input__name ${border('username', profilInfosEdit.username)}`}
                      onChange={handleOnChangeProfil}
                      value={profilInfosEdit.username}
                    />
                    <span className="text--errors">{errors.username}</span>
                  </>
                )}
              </div>
            </div>

          </div>

          <div className="section__info">
            <p className="section__info__title"><span className="section__info__title__svg">Informations Générales : </span></p>

            {editValue && (
              <div className="profil__section__informations__infos">

                <div className="profil__section__informations__bio__edit">

                  <label
                    htmlFor="email"
                    className="profil__section__informations__bio__edit__label"
                  >Email :
                  </label>
                  <input
                    className={`profil__section__informations__bio__edit__input ${border('email', profilInfosEdit.email)}`}
                    type="email"
                    placeholder="Votre email"
                    id="email"
                    onChange={handleOnChangeProfil}
                    value={profilInfosEdit.email}
                  />
                  <span className="text--errors">{errors.email}</span>

                </div>

                <div className="profil__section__informations__bio__edit">
                  <label
                    htmlFor="password"
                    className="profil__section__informations__bio__edit__label"
                  >Changer le mot de passe : 
                  </label>
                  { /* password */ }
                  <input
                    className={`profil__section__informations__bio__edit__input ${border('password', profilInfosEdit?.password)}`}
                    type="password"
                    placeholder="Votre mot de passe"
                    id="password"
                    onChange={handleOnChangeProfil}
                    value={profilInfosEdit.password}

                  />
                  <span className="text--errors">{errors.password}</span>
                  <input
                    className={`profil__section__informations__bio__edit__input ${border('passwordVerif', profilInfosEdit?.passwordVerif)}`}
                    type="password"
                    placeholder="Confirmez votre mot de passe"
                    id="passwordVerif"
                    onChange={handleOnChangeProfil}
                    value={profilInfosEdit?.passwordVerif}
                  />
                  <span className="text--errors">{errors.passwordVerif}</span>
                </div>

                <div className="profil__section__informations__bio__edit">
                  <label
                    htmlFor="phone"
                    className="profil__section__informations__bio__edit__label"
                  >Téléphone : 
                  </label>
                  <input
                    className="profil__section__informations__bio__edit__input"
                    type="phone"
                    placeholder="Votre numéro de téléphone"
                    id="phone"
                    onChange={handleOnChangeProfil}
                    value={profilInfosEdit.phone}
                  />
                </div>

                <div className="profil__section__informations__bio__edit">
                  <label
                    htmlFor="department"
                    className="profil__section__informations__bio__edit__label"
                  >Département : 
                  </label>
                  <select
                    id="department"
                    onChange={handleOnChangeProfil}
                    className="profil__section__informations__bio__edit__input"
                  >
                    {departementMap}
                  </select>
                </div>

                <div className="profil__section__informations__bio__edit">

                  <label
                    htmlFor="description"
                    className="profil__section__informations__bio__edit__label"
                  >Description : 
                  </label>
                  <textarea
                    className="profil__section__informations__bio__edit__textarea"
                    type="text"
                    placeholder="Description de l'association"
                    cols="30"
                    rows="7"
                    id="description"
                    onChange={handleOnChangeProfil}
                  />
                </div>

              </div>
            )}

            <div className="profil__section__informations__infos">
              {!editValue && (
                <>
                  {profilInfos.email && (
                    <div className="profil__section__informations__bio"><span className="profil__section__informations__bio__span">Email : </span> {profilInfos.email} </div>
                  )}

                  {profilInfos.phone && (
                    <div className="profil__section__informations__bio"><span className="profil__section__informations__bio__span">Téléphone : </span> {profilInfos.phone}</div>
                  )}

                  {profilInfos.localisation?.department && (
                    <div className="profil__section__informations__bio"><span className="profil__section__informations__bio__span">Département : </span> {resultat(profilInfos?.localisation?.department)}</div>
                  )}

                  {profilInfos.description && (
                    <div className="profil__section__informations__bio"><span className="profil__section__informations__bio__span">Description : </span> {profilInfos.description}</div>
                  )}
                </>
              )}
            </div>

          </div>

          <div className="section__info">
            <p className="section__info__title">Informations Complémentaires</p>
            <div className="profil__section__informations__infos">
              {editValue && (
              <>
                <div className="profil__section__informations__bio__edit">

                  <label
                    htmlFor="charge"
                    className="profil__section__informations__bio__edit__label"
                  >Frais pris en charge par l'association : 
                  </label>
                  <input
                    className="profil__section__informations__bio__edit__input"
                    type="text"
                    placeholder="Ex: frais vétérinaires, etc."
                    id="charge"
                    onChange={handleOnChangeProfil}
                    value={profilInfosEdit.charge}
                  />
                </div>

                <div className="profil__section__informations__bio__edit">

                  <label
                    htmlFor="equipment"
                    className="profil__section__informations__bio__edit__label"
                  >Equipement fournit par l'association : 
                  </label>
                  <input
                    className="profil__section__informations__bio__edit__input"
                    type="text"
                    placeholder="Equipement fournis"
                    id="equipment"
                    onChange={handleOnChangeProfil}
                    value={profilInfosEdit.equipment}
                  />
                </div>
              </>

              )}
            </div>

            {!editValue && (
            <>
              { profilInfos.association?.charge && (
              <div className="profil__section__informations__bio"><span className="profil__section__informations__bio__span">Prise en charge : </span> {profilInfos.association?.charge}</div>
              )}
              { profilInfos.equipment && (
              <div className="profil__section__informations__bio"><span className="profil__section__informations__bio__span">Equipement : </span> {profilInfos.equipment}</div>
              )}
            </>
            )}

            {mayICanEdit && (

              <div className="profil__section__informations__editAndSuppressSection">
                {!editValue && (
                <>
                  <button
                    type="button"
                    onClick={handleOnClickEdit}
                    className="profil__btn profil__btn--edit"
                  ><EditIcon /> Editer
                  </button>

                  {!delValue && (
                    <button
                      type="button"
                      onClick={handleOnClickDel}
                      className="profil__btn profil__btn--delete"
                    ><TrashIcon /> Supprimer
                    </button>

                  )}

                  {delValue && (
                    <>
                      <button
                        type="button"
                        onClick={handleOnClickDelConfirm}
                        className="profil__btn profil__btn--suppress"
                      >OUI SUPPRIMER
                      </button>

                      <button
                        type="button"
                        onClick={handleOnClickDel}
                        className="profil__btn profil__btn--keep"
                      >ANNULER
                      </button>
                    </>

                  )}
                </>
                )}
                {editValue && (
                <>
                  <button
                    type="button"
                    onClick={handleOnClickEdit}
                    className="profil__btn profil__btn--cancel"
                  >Annuler
                  </button>

                  <button
                    type="button"
                    onClick={handleOnClickEditSave}
                    className="profil__btn profil__btn--save"
                  >Enregister
                  </button>

                </>
                )}

              </div>

            )}

          </div>

          <section className="profil__section__informations__contact">

            {!mayICanEdit && (

              <div className="profil__section__informations__contact__name">
                <a
                  href={`mailto:${profilInfos.email}`}
                  className="profil__section__informations__contact__email"
                >Contacter {profilInfos.username}
                </a>
              </div>
            )}

            <div className="profil__section__informations__contact__icon">

              {!mayICanEdit && session.id && (
              <>
                {!alreadyLiked && (

                <span

                  type="button"
                  onClick={handleOnClickSetFavoris}
                >
                  <HeartIcon colorFill="black" />
                </span>

                )}

                {alreadyLiked && (

                <span

                  type="button"
                  onClick={handleOnClickSetFavoris}
                >
                  <HeartIcon colorFill="red" />
                </span>

                )}

              </>

              )}

              <ShareIcon />

            </div>
          </section>
        </section>
      </div>

      {!mayICanEdit && !editValue && (

      <>
        { profilInfos.cats.length >= 1 && (

        <section className="help">
          <h3 className="help__title">{profilInfos.username} vous presente</h3>
          <div className="grid">
            {CardsAnimalsPrev}
          </div>
        </section>

        )}
      </>
      )}

      {mayICanEdit && !editValue && (
      <>
        {animalsSameUser.length > 0 && (

        <section className="first__section">

          <h2 className="home__title">Vos Annonces</h2>

          <div className="grid">

            {CardsAllAnimalsPrev}

          </div>

        </section>

        )}

      </>
      )}
    </>
  );
};
export default Profil;
