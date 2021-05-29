// == Import npm
import React from 'react';

// == Import

import './styles.scss';

import CardsAnimals from 'src/containers/Cards/Animals';
import CardsUsers from 'src/containers/Cards/Users';

import { sortUsersByRoles } from 'src/selectors/user';

// == Composant
const Section = ({ animalsList, usersList, target }) => {
  let TypeOfCards;
  if (target !== 'animals') {
    const UsersListWhereUserRoleIsEqualTotheTarget = sortUsersByRoles(target, usersList);

    TypeOfCards = UsersListWhereUserRoleIsEqualTotheTarget.map((user) => {
      return (
        <CardsUsers
          key={user._id}
          user={user}
        />

      );
    });
  }
  else {
    TypeOfCards = animalsList.map((animal) => {
      return (
        <CardsAnimals
          key={animal._id}
          animal={animal}
          usersList={usersList}
        />
      );
    });
  }

  return (

    <section className="section">

      <div className="grid">

        {TypeOfCards}

      </div>

    </section>

  );
};

export default Section;
