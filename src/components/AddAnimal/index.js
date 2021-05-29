// == Import npm
import React, { useEffect } from "react";
/* import PropTypes from 'prop-types'; */

// == Import
import "./styles.scss";

// == Composant
const AddAnimal = ({
  changeFieldAnimal,
  cleanAnimalState,
  saveAnimal,
  savePicture,
  name,
  age,
  description,
  compatibility,
  treatments,
  photo,
  gender,
  care_type,
  breed,
  color,
  fur,
  size,
  setPicturePreview,
  setErrorAnimal,
  errors,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    cleanAnimalState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // == VERIF
  const VerifName = (value) => {
    console.log("Verifname", value);
    const specialChars = /[^\w]/.test(value.trim());

    if (value.trim().length < 1) {
      setErrorAnimal("name", "Required");
    } else if (value.trim().length <= 2) {
      setErrorAnimal("name", "Trois caractères minimum");
    } else if (specialChars) {
      setErrorAnimal("name", "Pas de caractères speciaux");
    } else {
      setErrorAnimal("name", "");
    }
  };

  const VerifNotEmpty = (value, id) => {
    if (value.trim().length < 1) {
      setErrorAnimal(id, "Required");
      setErrorAnimal("notEmpty", "error");
    } else {
      setErrorAnimal(id, "");
      setErrorAnimal("notEmpty", "");
    }
  };

  // == END VERIF

  const handleOnChange = (event) => {
    changeFieldAnimal(event.target.value, event.target.id);

    switch (event.target.id) {
      case "name":
        VerifName(event.target.value);
        break;
      case "description":
        break;
      case "treatments":
        break;
      case "compatibility":
        break;
      default:
        VerifNotEmpty(event.target.value, event.target.id);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      name.length > 0 &&
      gender.length > 0 &&
      age.length > 0 &&
      care_type.length > 0 &&
      size.length > 0 &&
      breed.length > 0 &&
      color.length > 0 &&
      fur.length > 0 &&
      typeof errors.name?.[0] === "undefined" &&
      typeof errors.notEmpty?.[0] === "undefined"
    ) {
      if (typeof document.querySelector("#avatar").files[0] === "undefined") {
        saveAnimal();
      } else {
        savePicture(document.querySelector("#avatar").files[0]);
      }
    }
  };

  const handleOnChangePicture = (event) => {
    setPicturePreview(event.target.files[0]);
  };

  const border = (id, value) => {
    console.log(id, "test", value);
    if (value.length > 0 && typeof errors[id]?.[0] === "undefined") {
      return "surligne-green";
    }

    if (value.length > 0 && typeof errors[id]?.[0] !== "undefined") {
      return "surligne-red";
    }
  };

  const classebutton =
    name.length > 0 &&
    gender.length > 0 &&
    age.length > 0 &&
    care_type.length > 0 &&
    size.length > 0 &&
    breed.length > 0 &&
    color.length > 0 &&
    fur.length > 0 &&
    typeof errors.name?.[0] === "undefined" &&
    typeof errors.notEmpty?.[0] === "undefined"
      ? "login__form__button login__form__button--active"
      : " login__form__button login__form__button--desactive";

  return (
    <div className="add">
      <h1 className="add__title">Ajouter un animal</h1>
      <div className="add__form">
        <form
          className="add__form__form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div
            className={name.length > 0 ? "field field--has-content" : "field"}
          >
            <label htmlFor="name" className="field-label">
              Nom de l'animal :
            </label>
            <input
              className={`add__form__input ${border("name", name)}`}
              type="text"
              placeholder="Nom de l'animal"
              id="name"
              onChange={handleOnChange}
              value={name}
            />
          </div>
          <span className="text--errors">{errors.name}</span>

          <div className="field">
            <p className="add__box--picture__name">Photo de l'animal</p>

            <div className="add__box">
              <div className="add__box--alignCenter">
                <div
                  className="add__box--picture"
                  style={{
                    backgroundImage: `url(${photo})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <label className="add__box--picture--add" htmlFor="avatar">
                    +
                  </label>
                </div>
              </div>
            </div>
            <input
              type="file"
              id="avatar"
              name="avatar"
              onChange={handleOnChangePicture}
              accept="image/png, image/jpeg"
              style={{ display: "none" }}
            />
          </div>

          <div className="add__wrapperFirstAndSecondSection">
            <div className="add__firstSection">
              <div className="add__box">
                <label className="field field--has-content" htmlFor="gender">
                  Sexe de l'animal :
                </label>

                <select
                  id="gender"
                  onChange={handleOnChange}
                  className={`add__form__select ${border("gender", gender)}`}
                >
                  <option value="">Selectionner</option>
                  <option value>Femelle</option>
                  <option value={false}>Mâle</option>
                </select>
              </div>

              <span className="text--errors">{errors.gender}</span>

              <div className="field field--has-content">
                <label htmlFor="age" className="field-label-age">
                  Âge de l'animal :
                </label>
                <div className="add__box">
                  <input
                    className={`add__form__input add__form__input--age ${border(
                      "age",
                      age
                    )}`}
                    type="number"
                    min="0"
                    placeholder="Âge"
                    id="age"
                    onChange={handleOnChange}
                    value={age}
                  />

                  <select
                    id="ageType"
                    onChange={handleOnChange}
                    className={`add__form__select add__form__select--age ${border(
                      "age",
                      age
                    )}`}
                  >
                    <option value="jour(s)">Jour(s)</option>
                    <option value="mois" selected>
                      Mois
                    </option>
                    <option value="an(s)">An(s)</option>
                  </select>
                </div>
                <span className="text--errors">{errors.age}</span>
              </div>

              <div className="add__box">
                <label className="field field--has-content" htmlFor="care_type">
                  Prise en charge :
                </label>

                <select
                  id="care_type"
                  onChange={handleOnChange}
                  className={`add__form__select ${border(
                    "care_type",
                    care_type
                  )}`}
                >
                  <option value="" selected>
                    Selectionner
                  </option>
                  <option value="weaned_kitten">Chaton sevré</option>
                  <option value="orphan_kitten">Chaton orphelin</option>
                  <option value="mother_kitten">Maman avec chatons</option>
                  <option value="adult">Adulte</option>
                  <option value="senior_cat">Senior</option>
                </select>
              </div>

              <span className="text--errors">{errors.care_type}</span>

              <div className="add__box">
                <label className="field field--has-content" htmlFor="size">
                  Taille :
                </label>

                <select
                  id="size"
                  onChange={handleOnChange}
                  className={`add__form__select ${border("size", size)}`}
                >
                  <option value="" selected>
                    Selectionner
                  </option>
                  <option value="small">Petit</option>
                  <option value="medium">Moyen</option>
                  <option value="tall">Grand</option>
                </select>
              </div>

              <span className="text--errors">{errors.size}</span>

              <div className="add__box">
                <label className="field field--has-content" htmlFor="type">
                  Race :
                </label>

                <select
                  id="breed"
                  onChange={handleOnChange}
                  className={`add__form__select ${border("breed", breed)}`}
                >
                  <option value="" selected>
                    Selectionner
                  </option>
                  <option value="european">Européen</option>
                  <option value="siamese">Siamois</option>
                  <option value="angora">Angora</option>
                  <option value="persian">Persan</option>
                </select>
              </div>

              <span className="text--errors">{errors.breed}</span>

              <div className="add__box">
                <label className="field field--has-content" htmlFor="type">
                  Couleur :
                </label>

                <select
                  id="color"
                  onChange={handleOnChange}
                  className={`add__form__select ${border("color", color)}`}
                >
                  <option value="" selected>
                    Selectionner
                  </option>
                  <option value="black">Noir</option>
                  <option value="white">Blanc</option>
                  <option value="brown">Marron</option>
                  <option value="grey">Gris</option>
                </select>
              </div>

              <span className="text--errors">{errors.color}</span>

              <div className="add__box">
                <label className="field field--has-content" htmlFor="type">
                  Type de poil :
                </label>

                <select
                  id="fur"
                  onChange={handleOnChange}
                  className={`add__form__select ${border("fur", fur)}`}
                >
                  <option value="" selected>
                    Selectionner
                  </option>
                  <option value="short">Court</option>
                  <option value="medium">Moyen</option>
                  <option value="long">Long</option>
                </select>
              </div>

              <span className="text--errors">{errors.fur}</span>
            </div>

            <div className="add__secondSection">
              <div
                className={
                  compatibility.length > 0
                    ? "field field--has-content"
                    : "field"
                }
              >
                <label htmlFor="compatibility" className="field-label">
                  Compatibilité :
                </label>
                <input
                  className="add__form__input"
                  type="text"
                  placeholder="Compatibilité avec enfant et/ou autres animaux"
                  id="compatibility"
                  onChange={handleOnChange}
                  value={compatibility}
                />
              </div>

              <div
                className={
                  treatments.length > 0 ? "field field--has-content" : "field"
                }
              >
                <label htmlFor="treatments" className="field-label">
                  Traitement/Maladies de l'animal:
                </label>
                <input
                  className="add__form__input"
                  type="text"
                  placeholder="Traitement/Maladies de l'animal"
                  id="treatments"
                  onChange={handleOnChange}
                  value={treatments}
                />
              </div>

              <div
                className={
                  description.length > 0 ? "field field--has-content" : "field"
                }
              >
                <label htmlFor="description" className="field-label">
                  Descritpion :
                </label>
                <textarea
                  className="add__form__input add__form__input__description"
                  type="text"
                  placeholder="Caractère de l'animal, etc."
                  id="description"
                  onChange={handleOnChange}
                  value={description}
                />
              </div>
              <div className="add__box">
                <label className="add__form" htmlFor="placed">
                  L'animal est-il placé en Famille d'Accueil:
                </label>

                <select
                  id="placed"
                  onChange={handleOnChange}
                  className="add__form__select"
                >
                  <option value>Oui</option>
                  <option value={false} selected>
                    Non
                  </option>
                </select>
              </div>
            </div>
          </div>

          <button className={classebutton} type="submit">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAnimal;
