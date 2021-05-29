import { connect } from "react-redux";

import AddAnimal from "src/components/AddAnimal";

import {
  changeFieldAnimal,
  saveAnimal,
  savePicture,
  setPicturePreview,
  setErrorAnimal,
  cleanAnimalState,
} from "src/redux/actions/animals";

const mapStateToProps = (state) => ({
  name: state.animals.name,

  gender: state.animals.gender,

  breed: state.animals.breed,
  color: state.animals.color,
  fur: state.animals.fur,
  age: state.animals.age,
  size: state.animals.size,
  care_type: state.animals.care_type,
  treatments: state.animals.treatments,
  compatibility: state.animals.compatibility,
  description: state.animals.description,
  placed: state.animals.placed,

  photo: state.animals.photo,
  photoPath: state.animals.photoPath,
  errors: state.animals.errors,
});

const mapDispatchToProps = (dispatch) => ({
  changeFieldAnimal: (value, id) => {
    console.log("changeFieldSignUp", id);

    dispatch(changeFieldAnimal(value, id));
  },

  saveAnimal: () => {
    console.log("je veux PUSH un animal");
    dispatch(saveAnimal());
  },

  savePicture: (value) => {
    console.log("je veux une photo", value);
    dispatch(savePicture(value));
  },

  setPicturePreview: (value) => {
    dispatch(setPicturePreview(value));
  },

  setErrorAnimal: (value, id) => {
    console.log("set errors", id, "-", value);
    dispatch(setErrorAnimal(value, id));
  },

  cleanAnimalState: () => {
    dispatch(cleanAnimalState());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAnimal);
