// == Import npm
import React from 'react';

// == Import
// import './styles.scss';

import ProfilAnimals from 'src/containers/Profils/Animals';
import ProfilUsers from 'src/containers/Profils/Users';
import ProfilUsersAsso from 'src/containers/Profils/UsersAsso';

import { getSomethingById } from 'src/selectors';
import { getUserById } from 'src/selectors/user';

// == Composant
const Profils = ({
  type,
  id,
  usersList,
  animalsList,
  profilInfosEdit,
}) => {
  console.log('id', id);
  console.log('usersList', usersList);
  let TypeOfProfil;

  if (type === 'animals') {
    const profil = getSomethingById(id, animalsList);
    TypeOfProfil = (
      <ProfilAnimals
        profilInfos={profil}
        profilInfosEdit={profilInfosEdit}
      />
    );
  }
  else {
    const getUserRole = () => {
      const getUserData = getUserById(id, usersList);

      return getUserData?.role;
    };

    const profil = getSomethingById(id, usersList);
    if (getUserRole() === 'association') {
      TypeOfProfil = (
        <ProfilUsersAsso
          profilInfos={profil}
          profilInfosEdit={profilInfosEdit}
        />
      );
    }
    else {
      TypeOfProfil = (
        <ProfilUsers
          profilInfos={profil}
          profilInfosEdit={profilInfosEdit}
        />
      );
    }
  }

  return (
    [TypeOfProfil]
  );
};

export default Profils;
