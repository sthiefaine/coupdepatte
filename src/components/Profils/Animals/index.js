// == Import npm
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AnimalsMiniCards from "src/containers/Cards/AnimalsMiniCards";
import pictureURL from "src/services/pictures";
import {
  MaleIcon,
  FemaleIcon,
  ShareIcon,
  PinIcon,
  HeartIcon,
  TrashIcon,
  EditIcon,
} from "src/selectors/icons";

import { getAnimalsUser } from "src/selectors/animals";

// == Import

import "./styles.scss";

import departements from "src/data/departements";

// eslint-disable-next-line max-len

// == Composant
const ProfilAnimals = ({
  session,
  setFavoris,
  usersList,
  profilInfos,
  profilInfosEdit,
  edit,
  editValue,
  changeFieldProfil,
  saveEditAnimal,
  del,
  delValue,
  delConfirm,
  animalsList,
  saveProfilPicture,
  setProfilPicturePreview,
  avatar,
  errors,
  setErrorProfil,
}) => {
  useEffect(() => {
    if (editValue) {
      edit();
    }

    window.scrollTo(0, 0);
  }, []);

  const animalsOwner = getAnimalsUser(profilInfos.user_id, usersList);

  const IMTheOwner = session?.id === profilInfos.user_id;

  const alreadyLiked = session.id
    ? Object.values(session?.favorites).find(
        (favorite) => favorite === profilInfos._id
      )
    : false;

  // Je veux filtrer les animaux du user
  const animalsSameUser = animalsList.filter(
    (animals) => animals.user_id === profilInfos.user_id
  );
  // Je veux la liste des animaux sans celui qui a le meme id que le profil affiché
  const animalDifferentId = animalsSameUser.filter(
    (differentId) => differentId._id !== profilInfos._id
  );

  const CardsAnimalsPrev = animalDifferentId.slice(0, 3).map((animal) => {
    return (
      <AnimalsMiniCards
        key={animal._id}
        animal={animal}
        usersList={usersList}
      />
    );
  });

  const logoGender =
    profilInfos.gender === false ? (
      <MaleIcon colorFill="blue" />
    ) : (
      <FemaleIcon colorFill="red" />
    );

  const resultat = (departmentNumber) => {
    const test = departements.find(
      (departement) => departement?.numero === departmentNumber
    );
    return `${test?.numero}  ${test?.name}`;
  };

  const handleOnClickEdit = () => {
    console.log("je veux editer le profil de", profilInfos.age);
    changeFieldProfil("", "photo");
    changeFieldProfil("", "photoPath");
    Object.keys(profilInfos).forEach((element) =>
      changeFieldProfil(profilInfos[element], element)
    );
    const age = profilInfos.age.substr(0, profilInfos.age.indexOf(" "));
    changeFieldProfil(parseInt(age, 10), "age");
    const ageType = profilInfos.age.substr(profilInfos.age.indexOf(" ") + 1);
    changeFieldProfil(ageType, "ageType");
    edit();
  };

  const handleOnClickEditSave = () => {
    console.log("je veux sauvegarder le profil de", profilInfos.name);
    if (typeof document.querySelector("#avatar").files[0] === "undefined") {
      saveEditAnimal();
    } else {
      saveProfilPicture(document.querySelector("#avatar").files[0]);
    }
  };

  const handleOnChangeProfil = (event) => {
    console.log("je veux editer le champ", event.target.id, event.target.value);
    changeFieldProfil(event.target.value, event.target.id);
  };

  const handleOnClickDel = () => {
    console.log("je veux supprimer", profilInfosEdit.name);
    Object.keys(profilInfos).forEach((element) =>
      changeFieldProfil(profilInfos[element], element)
    );
    const age = profilInfos.age.substr(0, profilInfos.age.indexOf(" "));
    changeFieldProfil(parseInt(age, 10), "age");
    const ageType = profilInfos.age.substr(profilInfos.age.indexOf(" ") + 1);
    changeFieldProfil(ageType, "ageType");
    del();
  };

  const handleOnClickDelConfirm = () => {
    console.log("Adieu ", profilInfosEdit.name, " tu vas nous manquer");
    delConfirm();
  };

  const handleOnChangePicture = (event) => {
    console.log("EDIT ChangePicture", event.target.files[0]);
    setProfilPicturePreview(event.target.files[0]);
  };

  const handleOnClickSetFavoris = () => {
    console.log("handleOnClickSetFavoris", "ok");
    setFavoris(session.id, profilInfos._id);
  };

  // traductions
  // TODO Peut etre deplacé dans un selector pour boucler dessus pour afficher les informations
  // TODO refacto
  const breed = {
    european: "Européen",
    siamese: "Siamois",
    angora: "Angora",
    persian: "Persian",
  };

  const color = {
    black: "Noir",
    white: "Blanc",
    brown: "Marron",
    grey: "Gris",
  };

  const fur = {
    short: "Court",
    medium: "Moyen",
    long: "Long",
  };

  const size = {
    tall: "Grand",
    medium: "Moyen",
    small: "Petit",
  };

  const care_type = {
    weaned_kitten: "Chaton sevré",
    orphan_kitten: "Chaton orphelin",
    mother_kitten: "Maman avec chatons",
    adult: "Adulte",
    senior_cat: "Senior",
  };

  const picture =
    avatar === "" ? profilInfosEdit.photo : `${pictureURL}${avatar}`;

  return (
    <>
      <div className="profil">
        <div className="profil__left">
          {!editValue && (
            <div
              alt=""
              className="profil__picture"
              style={{
                backgroundImage: `url(${pictureURL}${profilInfos.avatar})`,
                backgroundPosition: "cover",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
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
                  backgroundPosition: "cover",
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <label className="profil__picture--add" htmlFor="avatar">
                  +
                </label>
              </div>

              <input
                type="file"
                id="avatar"
                name="avatar"
                onChange={handleOnChangePicture}
                accept="image/png, image/jpeg"
                style={{ display: "none" }}
              />
            </>
          )}
        </div>
        <section className="profil__section">
          <div className="profil__section__informations">
            {!editValue && (
              <div className="profil__section__informations__top">
                <div className="profil__section__informations__nameAndLocationSection">
                  <h2 className="profil__section__informations__name">
                    {profilInfos.name}
                  </h2>

                  {animalsOwner?.localisation.department && (
                    <span className="profil__section__informations__localisation">
                      <PinIcon />
                      {resultat(animalsOwner?.localisation.department)}
                    </span>
                  )}
                </div>
                <p className="profil__section__informations__gender">
                  {logoGender}
                </p>
              </div>
            )}
            {editValue && (
              <div className="profil__section__informations__top edit__div">
                <div className="profil__section__informations__nameAndLocationSection">
                  <h2>
                    <input
                      id="name"
                      className="profil__section__informations__name edit__input edit__input__name"
                      onChange={handleOnChangeProfil}
                      value={profilInfosEdit.name}
                    />
                  </h2>
                  {animalsOwner?.localisation.department && (
                    <span className="profil__section__informations__localisation">
                      <PinIcon />
                      {resultat(animalsOwner?.localisation.department)}
                    </span>
                  )}
                </div>
                <p className="edit__select__gender">
                  <select
                    id="gender"
                    onChange={handleOnChangeProfil}
                    className="profil__section__informations__gender edit__select edit__select__gender__select"
                  >
                    {/* <MaleIcon colorFill="blue" />
                    <FemaleIcon colorFill="red" /> */}
                    <option selected={profilInfosEdit.gender === true} value>
                      Femelle
                    </option>
                    <option
                      selected={profilInfosEdit.gender === false}
                      value={false}
                    >
                      Mâle
                    </option>
                  </select>
                </p>
              </div>
            )}
          </div>

          <div className="profil__section__informations">
            <div className="profil__section__informations__infos">
              {!editValue && (
                <>
                  <div className="flex">
                    <div className="profil__section__informations__bio t30">
                      <span className="profil__section__informations__bio__span">
                        Race :{" "}
                      </span>
                      {breed[profilInfos.type?.breed]}
                    </div>
                    <div className="profil__section__informations__bio t30">
                      <span className="profil__section__informations__bio__span">
                        Couleur :{" "}
                      </span>
                      {color[profilInfos.type.color]}
                    </div>
                    <div className="profil__section__informations__bio t30">
                      <span className="profil__section__informations__bio__span">
                        Pelage :{" "}
                      </span>
                      {fur[profilInfos.type.fur]}
                    </div>
                  </div>

                  {profilInfos.description && (
                    <div className="profil__section__informations__bio">
                      <span className="profil__section__informations__bio__span">
                        Description :
                      </span>{" "}
                      {profilInfos.description}
                    </div>
                  )}

                  <div className="profil__section__informations__bio">
                    <span className="profil__section__informations__bio__span">
                      Âge :
                    </span>{" "}
                    {profilInfos.age}
                  </div>
                  <div className="profil__section__informations__bio">
                    <span className="profil__section__informations__bio__span">
                      Taille :
                    </span>{" "}
                    {size[profilInfos.size]}
                  </div>

                  {profilInfos.care_type && (
                    <div className="profil__section__informations__bio">
                      <span className="profil__section__informations__bio__span">
                        Type de prise en charge :{" "}
                      </span>
                      {care_type[profilInfos.care_type]}
                    </div>
                  )}

                  {profilInfos.treatments && (
                    <div className="profil__section__informations__bio">
                      <span className="profil__section__informations__bio__span">
                        Traitements / Maladies de l'animal :{" "}
                      </span>
                      {profilInfos.treatments}
                    </div>
                  )}

                  {profilInfos.compatibility && (
                    <div className="profil__section__informations__bio">
                      <span className="profil__section__informations__bio__span">
                        Compatibilité :{" "}
                      </span>
                      {profilInfos.compatibility}
                    </div>
                  )}
                </>
              )}

              {editValue && (
                <>
                  <div className="flex">
                    <div className="profil__section__informations__bio t30">
                      <span className="profil__section__informations__bio__span edit__span">
                        Race :{" "}
                      </span>
                      <select
                        id="breed"
                        onChange={handleOnChangeProfil}
                        className="edit__select"
                      >
                        <option
                          selected={profilInfosEdit.type?.breed === "european"}
                          value="european"
                        >
                          Européen
                        </option>
                        <option
                          selected={profilInfosEdit.type?.breed === "siamese"}
                          value="siamese"
                        >
                          Siamois
                        </option>
                        <option
                          selected={profilInfosEdit.type?.breed === "angora"}
                          value="angora"
                        >
                          Angora
                        </option>
                        <option
                          selected={profilInfosEdit.type?.breed === "persian"}
                          value="persian"
                        >
                          Persan
                        </option>
                      </select>
                    </div>
                    <div className="profil__section__informations__bio t30">
                      <span className="profil__section__informations__bio__span edit__span">
                        Couleur :{" "}
                      </span>
                      <select
                        id="color"
                        onChange={handleOnChangeProfil}
                        className="edit__select"
                      >
                        <option
                          selected={profilInfosEdit.type.color === "black"}
                          value="black"
                        >
                          Noir
                        </option>
                        <option
                          selected={profilInfosEdit.type.color === "white"}
                          value="white"
                        >
                          Blanc
                        </option>
                        <option
                          selected={profilInfosEdit.type.color === "brown"}
                          value="brown"
                        >
                          Marron
                        </option>
                        <option
                          selected={profilInfosEdit.type.color === "grey"}
                          value="grey"
                        >
                          Gris
                        </option>
                      </select>
                    </div>
                    <div className="profil__section__informations__bio t30">
                      <span className="profil__section__informations__bio__span edit__span">
                        Pelage :{" "}
                      </span>
                      <select
                        id="fur"
                        onChange={handleOnChangeProfil}
                        className="edit__select"
                      >
                        <option
                          selected={profilInfosEdit.type.fur === "short"}
                          value="short"
                        >
                          Court
                        </option>
                        <option
                          selected={profilInfosEdit.type.fur === "medium"}
                          value="medium"
                        >
                          Moyen
                        </option>
                        <option
                          selected={profilInfosEdit.type.fur === "long"}
                          value="long"
                        >
                          Long
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="profil__section__informations__bio">
                    <span className="profil__section__informations__bio__span edit__span">
                      Description :
                    </span>
                    <textarea
                      type="text"
                      placeholder="Caractère de l'animal, etc."
                      id="description"
                      onChange={handleOnChangeProfil}
                      value={profilInfosEdit.description}
                      className="edit__textarea"
                    />
                  </div>

                  <div className="profil__section__informations__bio">
                    <span className="profil__section__informations__bio__span edit__span">
                      Âge :
                    </span>
                    <input
                      type="number"
                      min="0"
                      placeholder="Âge"
                      id="age"
                      onChange={handleOnChangeProfil}
                      value={profilInfosEdit.age}
                      className="edit__input edit__input__age"
                    />
                    <select
                      id="ageType"
                      onChange={handleOnChangeProfil}
                      className="edit__select edit__select__age"
                    >
                      <option
                        selected={profilInfosEdit.ageType === "jour(s)"}
                        value="jour(s)"
                      >
                        Jour(s)
                      </option>
                      <option
                        selected={profilInfosEdit.ageType === "mois"}
                        value="mois"
                      >
                        Mois
                      </option>
                      <option
                        selected={profilInfosEdit.ageType === "an(s)"}
                        value="an(s)"
                      >
                        An(s)
                      </option>
                    </select>
                  </div>
                  <div className="profil__section__informations__bio">
                    <span className="profil__section__informations__bio__span edit__span">
                      Taille :
                    </span>
                    <select
                      id="size"
                      onChange={handleOnChangeProfil}
                      className="edit__select edit__select__size"
                    >
                      <option
                        selected={profilInfosEdit.size === "small"}
                        value="small"
                      >
                        Petit
                      </option>
                      <option
                        selected={profilInfosEdit.size === "medium"}
                        value="medium"
                      >
                        Moyen
                      </option>
                      <option
                        selected={profilInfosEdit.size === "tall"}
                        value="tall"
                      >
                        Grand
                      </option>
                    </select>
                  </div>

                  <div className="profil__section__informations__bio">
                    <span className="profil__section__informations__bio__span edit__span">
                      Type de prise en charge :{" "}
                    </span>
                    <select
                      id="care_type"
                      onChange={handleOnChangeProfil}
                      className="edit__select edit__select__careType"
                    >
                      <option
                        selected={profilInfosEdit.care_type === "weaned_kitten"}
                        value="weaned_kitten"
                      >
                        Chaton sevré
                      </option>
                      <option
                        selected={profilInfosEdit.care_type === "orphan_kitten"}
                        value="orphan_kitten"
                      >
                        Chaton orphelin
                      </option>
                      <option
                        selected={profilInfosEdit.care_type === "mother_kitten"}
                        value="mother_kitten"
                      >
                        Maman avec chatons
                      </option>
                      <option
                        selected={profilInfosEdit.care_type === "adult"}
                        value="adult"
                      >
                        Adulte
                      </option>
                      <option
                        selected={profilInfosEdit.care_type === "senior_cat"}
                        value="senior_cat"
                      >
                        Senior
                      </option>
                    </select>
                  </div>

                  <div className="profil__section__informations__bio">
                    <span className="profil__section__informations__bio__span edit__span">
                      Traitements / Maladies de l'animal :{" "}
                    </span>
                    <input
                      className="edit__input edit__input__treatments"
                      type="text"
                      placeholder="Traitement/Maladies"
                      id="treatments"
                      onChange={handleOnChangeProfil}
                      value={profilInfosEdit.treatments}
                    />
                  </div>

                  <div className="profil__section__informations__bio">
                    <span className="profil__section__informations__bio__span edit__span">
                      Compatibilité :{" "}
                    </span>
                    <input
                      className="edit__input"
                      type="text"
                      placeholder="Compatibilité avec enfant et/ou autres animaux"
                      id="compatibility"
                      onChange={handleOnChangeProfil}
                      value={profilInfosEdit.compatibility}
                    />
                  </div>
                </>
              )}
            </div>

            <section className="profil__section__informations__contact">
              {!IMTheOwner && (
                <div className="profil__section__informations__contact__name">
                  <a
                    href={`mailto:${animalsOwner?.email}`}
                    className="profil__section__informations__contact__email"
                  >
                    Contacter {animalsOwner?.username}
                  </a>
                </div>
              )}
              <div className="profil__section__informations__contact__icon">
                {!IMTheOwner && session.id && (
                  <>
                    {!alreadyLiked && (
                      <span type="button" onClick={handleOnClickSetFavoris}>
                        <HeartIcon colorFill="black" />
                      </span>
                    )}

                    {alreadyLiked && (
                      <span type="button" onClick={handleOnClickSetFavoris}>
                        <HeartIcon colorFill="red" />
                      </span>
                    )}
                  </>
                )}

                <ShareIcon />
              </div>
            </section>
          </div>
        </section>

        {IMTheOwner && (
          <div className="profil__section__informations__editAndSuppressSection">
            {!editValue && (
              <>
                <button
                  type="button"
                  className="profil__btn profil__btn--edit"
                  onClick={handleOnClickEdit}
                >
                  <EditIcon /> Editer
                </button>

                {!delValue && (
                  <button
                    type="button"
                    onClick={handleOnClickDel}
                    className="profil__btn profil__btn--delete"
                  >
                    <TrashIcon /> Supprimer
                  </button>
                )}

                {delValue && (
                  <>
                    <button
                      type="button"
                      onClick={handleOnClickDelConfirm}
                      className="profil__btn profil__btn--suppress"
                    >
                      OUI SUPPRIMER
                    </button>

                    <button
                      type="button"
                      onClick={handleOnClickDel}
                      className="profil__btn profil__btn--keep"
                    >
                      NON JE LE GARDE
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
                >
                  Annuler
                </button>

                <button
                  type="button"
                  onClick={handleOnClickEditSave}
                  className="profil__btn profil__btn--save"
                >
                  Enregister
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {animalDifferentId.length > 0 && !editValue && (
        <section className="help">
          <h3 className="help__title">
            Ils font aussi partie de la même Association
          </h3>
          <div className="grid">{CardsAnimalsPrev}</div>
        </section>
      )}
    </>
  );
};

export default ProfilAnimals;
