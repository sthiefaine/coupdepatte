// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import { EyesIcon } from 'src/selectors/icons';

// == Composant
const Login = ({
  email,
  password,
  changeField,
  login,
  loggedMessage,
  errors,
  setErrorLogin,
  changePasswordType,
  passwordType,
}) => {
  const VerifMail = (value) => {
    if (value.length < 1) {
      setErrorLogin('email', 'Required');
    }
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
      setErrorLogin('email', 'Invalid email address');
    }
    else {
      setErrorLogin('email', '');
    }
  };

  const VerifPassword = (value) => {
    const uppercase = /[A-Z]/.test(value);
    const lowercase = /[a-z]/.test(value);
    const number = /[0-9]/.test(value);
    const specialChars = /[^\w]/.test(value);

    if (!value) {
      setErrorLogin('password', 'Mot de passe non renseigné.');
    }
    else if (value.length < 8) {
      setErrorLogin('password', 'Mot de passe trop court, il doit comptenir 8 caractères.');
    }
    else if (!lowercase) {
      setErrorLogin('password', 'Le mot de passe doit comptenir au moins 1 minuscule.');
    }
    else if (!number) {
      setErrorLogin('password', 'Le mot de passe doit comptenir au moins 1 chiffre.');
    }
    else {
      setErrorLogin('password', '');
    }
  };

  useEffect(() => {
    if (password.length > 0
      && email.length > 0) {
      VerifPassword(password);
      VerifMail(email);
    }
  }, []);

  const handleOnChange = (event) => {
    changeField(event.target.value, event.target.id);

    switch (event.target.id) {
      case 'password':
        VerifPassword(event.target.value);
        break;
      case 'email':
        VerifMail(event.target.value);
        break;
      default:
    }
  };

  const handleChangePasswordType = (event) => {
    changePasswordType('toto');
  }

  const definePasswordType = passwordType === true ? 'text' : 'password';



  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      email.length > 0
      && password.length > 0
      && typeof errors?.email?.[0] === 'undefined'
      && typeof errors?.password?.[0] === 'undefined'
    ) {
      login();
    }
  };

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
    && typeof errors?.email?.[0] === 'undefined'
    && typeof errors?.password?.[0] === 'undefined') ? 'login__form__button login__form__button--active' : ' login__form__button login__form__button--desactive';

  return (
    <div className="login">
      <h1 className="login__title">Connexion</h1>
      <div className="login__form">
        <form onSubmit={handleSubmit}>

          <div className={email.length > 0 ? 'field field--has-content' : 'field'}>

            <label
              htmlFor="email"
              className="field-label"
            >
              Email :
            </label>

            <input
              className={`login__form__email login__form__input ${border('email', email)}`}
              type="email"
              inputMode="email"
              placeholder="Email"
              id="email"
              onChange={handleOnChange}
              value={email}
            />
            <span className="text--errors">{errors.email}</span>

          </div>

          <div className={password.length > 0 ? 'field field--has-content' : 'field'}>
            <label
              htmlFor="password"
              className="field-label"
            >Mot de passe :
            </label>
            
            <input
              className={`login__form__password login__form__input ${border('password', password)}`}
              type={definePasswordType}
              placeholder="Mot de passe"
              id="password"
              onChange={handleOnChange}
              value={password}
            />
            <div className="login__form__password--display" onClick={handleChangePasswordType}><EyesIcon /></div>
            
          </div>
          <span className="text--errors">
            {errors.password}
          </span>
          <button
            className={classebutton}
            type="submit"
          >
            Se Connecter
          </button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  loggedMessage: PropTypes.string,
};

export default Login;
