// == Import npm
import React from 'react';
/* import imgContact from 'src/assets/contact.jpeg'; */
// == Import

import './styles.scss';

// == Composant
const MentionLegal = ({
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

    <article className="MentionLegal">
      <h2 className="MentionLegal__subTitle1">Mentions Légales</h2>
      <div className="MentionLegal__block">

        <div className="MentionLegal__block__text">

          <p>Conformément aux dispositions des articles 6-||| et 19 de la Loi n°2004-575 du 21 juin 2004 pour la confiance
            dans l'économie numérique, dites LCEN, il est porté à la connaissance des utilisateurs du site unptitcoupdpatte.fr
            les présentes mentions légales.<br /><br />La connexion et la navigation sur le site un ptit coup d'patte par l'utilisateur
            nécessite l'acceptation intégrale et sans réserve des présentes mentions légales.<br /><br />Ces dernières sont accessibles
            sur le site à la rubrique "Mentions légales".
          </p>

        </div>

        <div className="MentionLegal__block__text">

          <h3 className="MentionLegal__subTitle2"> Article 1 : l'éditeur</h3>
          <p><br /><br />L'édition du site unptitcoupdpatte.fr est assurée par la société #Team Fantasy au capital de 2.55698410028 euros,
            immatriculée au RCS de Pétahouchnok sous le numéro 0028659744411 dont le siège social est situé à Dache, numéro de téléphone
            00 22 99 77 54, adresse e-mail: tagadatsointsoin@bzh.fr.<br /><br />N° de TVA intracommunautaire: 000112255669988.<br /><br />
            La Directrice de la publication est Furiie
          </p>

        </div>
        <div className="MentionLegal__block__text">

          <h3 className="MentionLegal__subTitle2"> Article 2 : l'hébergeur</h3>
          <p><br /><br />L'hébergeur du site unptitcoupdpatte.fr est la Société Coupdpaluche.com, dont le siège social est situé à Perpète-lès-oies ,
            avec le numérode téléphone : 0022115588.
          </p>

        </div>
        <div className="MentionLegal__block__text">

          <h3 className="MentionLegal__subTitle2"> Article 3 : Accès au site</h3>
          <p><br /><br />Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non
            et pouvant découlant d’une nécessité de maintenance.<br /><br />En cas de modification, interruption ou suspension des services
            le site unptitcoupdpatte.fr ne saurait être tenu responsable.
          </p>

        </div>
        <div className="MentionLegal__block__text">

          <h3 className="MentionLegal__subTitle2"> Article 4 : Collecte des données</h3>
          <p><br /><br />Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie
            privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés.
            Le site est déclaré à la CNIL sous le numéro 00066699977888.<br /><br />En vertu de la loi Informatique et Libertés, en date du
            6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, desuppression et d'opposition de ses données personnelles.
            L'Utilisateur exerce ce droit :· via un formulaire de contact ;
          </p>

        </div>
        <div className="MentionLegal__block__text">

          <h3 className="MentionLegal__subTitle2"> Article 5 : Cookies</h3>
          <p><br /><br />L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel
            de navigation.<br /><br />En naviguant sur le site, il les accepte.<br /><br />Un cookie est un élément qui ne permet pas
            d’identifier l’Utilisateur mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site Internet.
            L’Utilisateur pourra désactiver ce cookie par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.
          </p>

        </div>
        <div className="MentionLegal__block__text">

          <h3 className="MentionLegal__subTitle2">Article 6 : Propriété intellectuelle</h3>
          <p><br /><br />Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site unptitcoupdpatte.fr,
            sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues parle
            Code de la propriété intellectuelle et le Code civil.
          </p>

        </div>

      </div>

    </article>
  );
};
export default MentionLegal;
