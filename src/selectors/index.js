/* eslint-disable import/prefer-default-export */
export const getSomethingById = (id, listData) => listData.find((list) => (id === list._id));
