import api from 'src/services/api';

import axios from 'axios';

import { SAVE_ANIMAL2 } from 'src/actions/animals';

const animals = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_ANIMAL2: {


      console.log('SAVE_ANIMAL2', action.photo);

      const formData = new FormData();
      formData.append("image", action.photo);

      console.log(formData.get('image'));

      api.post('upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
        .then((response) => {
          console.log('Middleware Animals response', response);
        })
        .catch((error) => {
          console.log('Une erreur est survenue', error);
        });

        next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default animals;

