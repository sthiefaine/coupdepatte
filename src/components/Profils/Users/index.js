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

import departementsList from 'src/data/departements';

// == Composant
const Profil = ({
  session,
  usersList,
  setFavoris,
  id,
  profilInfos,
  profilInfosEdit,
  edit,
  editValue,
  changeFieldProfil,
  saveEditUser,
  del,
  delValue,
  delUserConfirm,
  saveUserProfilPicture,
  setProfilPicturePreview,
  avatar,
  errors,
  setErrorProfil,
  cleanError,
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
    Object.keys(profilInfos).forEach((element) => changeFieldProfil(profilInfos[element], element));
    changeFieldProfil('', 'password');
    changeFieldProfil('', 'passwordVerif');
    edit();
  };

  const handleOnClickEditSave = () => {
    console.log('je veux sauvegarder le profil de', profilInfosEdit.username);

    if (profilInfosEdit.password.length > 0 && profilInfosEdit.passwordVerif.length === 0) {
      setErrorProfil('passwordVerif', 'Mot de passe non identique');
      return;
    }

    if (
      profilInfosEdit.email.length > 0
    && profilInfosEdit.username.length > 0
    && typeof errors.email?.[0] === 'undefined'
    && typeof errors.password?.[0] === 'undefined'
    && typeof errors.username?.[0] === 'undefined'
    && typeof errors.passwordVerif?.[0] === 'undefined'
    ) {
      if (typeof document.querySelector('#avatar').files[0] === 'undefined') {
        saveEditUser();
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

  const resultat = (departmentNumber) => {
    const test = departementsList.find((departement) => (departement.numero === departmentNumber));

    return (
      `${test.numero}  ${test.name}`

    );
  };

  const condition = {
    flat: 'Appartement',
    house: 'Maison',
    quarantine: 'Quarentaine',
  };

  const picture = avatar === '' ? profilInfosEdit.photo : `${pictureURL}${avatar}`;

  const mayICanEdit = session?.id === profilInfos._id;

  const alreadyLiked = session.id ? Object.values(session?.favorites).find((favorite) => (favorite === profilInfos._id)) : false;

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
                    placeholder="Nouveau mot de passe"
                    id="password"
                    onChange={handleOnChangeProfil}
                    value={profilInfosEdit.password}

                  />
                  <span className="text--errors">{errors.password}</span>
                  <input
                    className={`profil__section__informations__bio__edit__input ${border('passwordVerif', profilInfosEdit?.passwordVerif)}`}
                    type="password"
                    placeholder="Confirmer le nouveau mot de passe"
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
                    placeholder="Description"
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
            <p className="section__info__title"><span className="section__info__title__svg"><Infos colorFill="black" /></span>Informations Complémentaires :</p>
            <div className="profil__section__informations__infos">
              {editValue && (
              <>

                <div className="profil__section__informations__bio__edit">

                  <label
                    htmlFor="equipement"
                    className="profil__section__informations__bio__edit__label"
                  >Equipement disponible : 
                  </label>
                  <input
                    className="profil__section__informations__bio__edit__input"
                    type="text"
                    placeholder="Equipement disponible"
                    id="equipement"
                    onChange={handleOnChangeProfil}
                    value={profilInfosEdit.equipement}
                  />
                </div>

                <div className="profil__section__informations__bio__edit">
                  <span className="profil__section__informations__bio__span edit__span">Disponibilité : </span>
                  <select
                    id="disponibility"
                    onChange={handleOnChangeProfil}
                    className="profil__section__informations__bio__edit__select"
                  >
                    <option selected={profilInfosEdit.foster?.disponibility === true} value>Disponible</option>
                    <option selected={profilInfosEdit.foster?.disponibility === false} value={false}>Indisponible</option>

                  </select>
                </div>

                <div className="profil__section__informations__bio__edit"><span className="profil__section__informations__bio__span edit__span">Condition : </span>
                  <select
                    id="condition"
                    onChange={handleOnChangeProfil}
                    className="profil__section__informations__bio__edit__select"
                  >
                    <option selected={profilInfosEdit.foster?.condition === ''} value="">Default</option>
                    <option selected={profilInfosEdit.foster?.condition === 'flat'} value="flat">Appartement</option>
                    <option selected={profilInfosEdit.foster?.condition === 'house'} value="house">Maison</option>
                    <option selected={profilInfosEdit.foster?.condition === 'quarantine'} value="quarantine">Quarantaine</option>
                  </select>
                </div>

                <div className="profil__section__informations__bio__edit">

                  <label
                    htmlFor="presence_of"
                    className="profil__section__informations__bio__edit__label"
                  >Composition du foyer : 
                  </label>
                  <input
                    className="profil__section__informations__bio__edit__input"
                    type="text"
                    placeholder="Composition du foyer"
                    id="presence_of"
                    onChange={handleOnChangeProfil}
                    value={profilInfosEdit.presence_of}
                  />
                </div>

                <div className="profil__section__informations__bio__edit">

                  <label
                    htmlFor="wish"
                    className="profil__section__informations__bio__edit__label"
                  >Souhait : 
                  </label>
                  <input
                    className="profil__section__informations__bio__edit__input"
                    type="text"
                    placeholder="Souhait"
                    id="wish"
                    onChange={handleOnChangeProfil}
                    value={profilInfosEdit.wish}
                  />
                </div>

              </>

              )}
            </div>

            {!editValue && (
            <>
              { profilInfos.equipment && (
              <div className="profil__section__informations__bio"><span className="profil__section__informations__bio__span">Equipement : </span>{profilInfos.equipment}</div>
              )}
              { profilInfos.foster?.disponibility && (
              <div className="profil__section__informations__bio"><span className="profil__section__informations__bio__span">Disponibilité : </span>
                {profilInfos.foster?.disponibility === true ? 'Disponible' : 'Indispnible'}
              </div>
              )}

              { profilInfos.foster?.condition && (
              <div className="profil__section__informations__bio"><span className="profil__section__informations__bio__span">Condition : </span>{condition[profilInfos.foster?.condition]}</div>
              )}

              { profilInfos.foster?.presence_of && (
              <div className="profil__section__informations__bio"><span className="profil__section__informations__bio__span">Composition du foyer : </span>{profilInfos.foster?.presence_of}</div>
              )}

              { profilInfos.foster?.wish && (
              <div className="profil__section__informations__bio"><span className="profil__section__informations__bio__span">Souhait : </span>{profilInfos.foster?.wish}</div>
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
                    className="profil__btn profil__btn--suppress"
                    onClick={handleOnClickDelConfirm}
                  >OUI SUPPRIMER
                  </button>

                  <button
                    type="button"
                    className="profil__btn profil__btn--keep"
                    onClick={handleOnClickDel}
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
                >Contacter {profilInfos.name}
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
    </>
  );
};
export default Profil;
