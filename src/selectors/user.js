/* eslint-disable import/prefer-default-export */
export const getLoggedMessage = (user) => user.infos && `Bienvenu ${user.infos.pseudo}`;

export const getUserById = (id, usersList) => usersList.find((user) => (id === user._id));

export const sortUsersByRoles = (
  role,
  usersList,
) => {
  let rolePurify;
  if (role === 'associations') {
    rolePurify = 'association';
  }
  else if (role === 'utilisateurs') {
    rolePurify = 'foster';
  }
  else {
    rolePurify = 'association';
  }

  return usersList.filter((user) => (rolePurify === user.role));
};
