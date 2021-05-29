// == Import npm
import React from 'react';
import imgContact from 'src/assets/contact.jpeg';
// == Import

import './styles.scss';

// == Composant
const Contact = ({
  changeField,
  username,
  name,
  departement,
  email,
  password,
  passwordVerif,
  signUp,

}) => {
  return (

    <article className="contact">
      <h2 className="contact__subTitle1">Contact</h2>
      <div className="contact__block">

        <div className="contact__block__img">
          <img
            className="contact__block__img__chat"
            src={imgContact}
            alt="imageContact"
          />
        </div>

        <div className="contact__block__title">
          <p>Si vous avez des suggestions, n'hésitez pas:</p>
        </div>

        <div className="contact__block__button">
          {email}
          <a href="mailto:unpticoupdepatte@gmail.com">Contactez nous</a>
        </div>

      </div>

    </article>
  );
};
export default Contact;
