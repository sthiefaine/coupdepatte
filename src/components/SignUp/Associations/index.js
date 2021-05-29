// == Import npm
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
/* import PropTypes from 'prop-types'; */

import './styles.scss';
import { EyesIcon } from 'src/selectors/icons';
// == Import

import departementsList from 'src/data/departements';

// == Composant
const SignUpAssociations = ({
  changeFieldSignUp,
  username,
  departement,
  email,
  password,
  passwordVerif,
  signUp,
  valid,
  accountValidate,
  errors,
  setErrorSignUp,
  changePasswordType,
  passwordType,
}) => {
  const departementMap = departementsList.map((departementlist) => {
    const selectedDepartment = departementlist.numero === departement ? 'selected' : '';

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

  const VerifMail = (value) => {
    if (value.length < 1) {
      setErrorSignUp('email', 'Required');
    }
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
      setErrorSignUp('email', 'Invalid email address');
    }
    else {
      setErrorSignUp('email', '');
    }
  };

  const VerifUserName = (value) => {
    console.log('Verifusername', value);
    const specialChars = /[^\w]/.test(value.trim());

    if (value.trim().length < 1) {
      setErrorSignUp('username', 'Required');
    }

    else if (value.trim().length <= 3) {
      setErrorSignUp('username', 'Quatre caractères minimum');
    }

    else if (specialChars) {
      setErrorSignUp('username', 'Pas de caractères speciaux');
    }
    else {
      setErrorSignUp('username', '');
    }
  };

  const VerifPassword = (value) => {
    const uppercase = /[A-Z]/.test(value);
    const lowercase = /[a-z]/.test(value);
    const number = /[0-9]/.test(value);
    const specialChars = /[^\w]/.test(value);

    if (!value) {
      setErrorSignUp('password', 'Mot de passe non renseigné.');
    }
    else if (value.length < 8) {
      setErrorSignUp('password', 'Mot de passe trop court, il doit comptenir 8 caractères.');
    }
    else if (!lowercase) {
      setErrorSignUp('password', 'Le mot de passe doit comptenir au moins 1 minuscule.');
    }
    else if (!number) {
      setErrorSignUp('password', 'Le mot de passe doit comptenir au moins 1 chiffre.');
    }
    else {
      setErrorSignUp('password', '');
    }
  };

  const VerifPasswordVerif = (value) => {
    if (!value) {
      setErrorSignUp('passwordVerif', 'Confirmation obligatoire.');
    }
    else if (value !== password) {
      setErrorSignUp('passwordVerif', 'Mot de passe non identique');
    }
    else {
      setErrorSignUp('passwordVerif', '');
    }
  };

  const VerifDepartment = (value) => {
    if (!value) {
      setErrorSignUp('departement', 'Sélectionnez un departement');
    }
    else {
      setErrorSignUp('departement', '');
    }
  };

  useEffect(() => {
    accountValidate(false);

    if (password.length > 0
      && email.length > 0) {
      VerifPassword(password);
      VerifMail(email);
    }
  }, []);

  const handleOnChange = (event) => {
    changeFieldSignUp(event.target.value, event.target.id);

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
      case 'departement':
        VerifDepartment(event.target.value);
        break;
      case 'passwordVerif':
        VerifPasswordVerif(event.target.value);
        break;
      default:
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      email.length > 0
      && password.length > 0
      && username.length > 0
      && departement.length > 0
      && passwordVerif.length > 0
      && typeof errors.email?.[0] === 'undefined'
      && typeof errors.password?.[0] === 'undefined'
      && typeof errors.username?.[0] === 'undefined'
      && typeof errors.departement?.[0] === 'undefined'
      && typeof errors.passwordVerif?.[0] === 'undefined'
    ) {
      signUp();
    }
  };

  const handleChangePasswordType = (event) => {
    changePasswordType('toto');
  };

  const definePasswordType = passwordType === true ? 'text' : 'password';

  // eslint-disable-next-line consistent-return
  const border = (id, value) => {
    console.log(id, 'test', value);
    if ((value.length > 0) && (typeof errors[id]?.[0] === 'undefined')) {
      return 'surligne-green';
    }

    if ((value.length > 0) && (typeof errors[id]?.[0] !== 'undefined')) {
      return 'surligne-red';
    }
  };

  const classebutton = (
    email.length > 0
    && password.length > 0
    && username.length > 0
    && departement.length > 0
    && passwordVerif.length > 0
    && typeof errors.email?.[0] === 'undefined'
    && typeof errors.password?.[0] === 'undefined'
    && typeof errors.username?.[0] === 'undefined'
    && typeof errors.departement?.[0] === 'undefined'
    && typeof errors.passwordVerif?.[0] === 'undefined') ? 'login__form__button login__form__button--active' : ' login__form__button login__form__button--desactive';

  return (

    <div className="signup">
      <h1 className="signup__title">Inscription</h1>

      {!valid && (

      <div className="signup__form">
        <form onSubmit={handleSubmit}>

          <div className={username.length > 0 ? 'field field--has-content' : 'field'}>
            <label
              htmlFor="username"
              className="field-label"
            >Nom d'utilisateur :
            </label>
            <input
              className={`signup__form__input ${border('username', username)}`}
              type="text"
              placeholder="Nom d'utilisateur"
              id="username"
              onChange={handleOnChange}
              value={username}

            />

            <span className="text--errors">
              {errors.username}
            </span>
          </div>

          <div className="signup__box-departement">
            <label
              className="signup__form signup__box-departement__title"
              htmlFor="departement"
            >Votre département :
            </label>

            {/*           <input
            className="signup__form__departement"
            type="text"
            name="département"
            id="departement"
            min="01"
            max="99"
            required
          /> */}

            <select
              id="departement"
              onChange={handleOnChange}
              className={`signup__form__input ${border('departement', departement)}`}
            >
              <option selected value="">Sélectionner</option>

              {departementMap}
            </select>
            <span className="text--errors">{errors.departement}</span>

          </div>

          <div className={email.length > 0 ? 'field field--has-content' : 'field'}>
            <label
              className="field-label"
              htmlFor="email"
            >Email :
            </label>
            <input
              className={`signup__form__input ${border('email', email)}`}
              placeholder="Email"
              type="text"
              id="email"
              inputMode="email"
              onChange={handleOnChange}
              value={email}
            />
            <span className="text--errors">{errors.email}</span>

          </div>

          <div className={password.length > 0 ? 'field field--has-content' : 'field'}>
            <label
              className="field-label"
              htmlFor="password"
            >Mot de passe :
            </label>
            <input
              className={`signup__form__password signup__form__input ${border('password', password)}`}
              type={definePasswordType}
              placeholder="Mot de passe"
              id="password"
              onChange={handleOnChange}
              value={password}
            />
            <div className="signup__form__password--display" onClick={handleChangePasswordType}><EyesIcon /></div>
            <span className="text--errors">{errors.password}</span>
          </div>
          <div className={passwordVerif.length > 0 ? 'field field--has-content' : 'field'}>
            <label
              className="field-label"
              htmlFor="passwordVerif"
            >Confirmer le mot de passe
            </label>

            <input
              className={`signup__form__input ${border('passwordVerif', passwordVerif)}`}
              type="password"
              placeholder="Confirmer le mot de passe"
              id="passwordVerif"
              onChange={handleOnChange}
              value={passwordVerif}
            />
            <span className="text--errors">{errors.passwordVerif}</span>
          </div>

          <button
            className={classebutton}
            type="submit"
          >
            S'inscrire
          </button>
        </form>

      </div>

      )}

      {valid && (
        <>
          <div className="validation">
            Votre compte a bien été créé {username}.

            <button type="button" className="validation__button">
              <Link
                to="/"
              >
                Retour à l'accueil
              </Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

/* Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}; */

export default SignUpAssociations;
