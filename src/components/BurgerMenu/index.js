// == Import npm
import React from 'react';

import './styles.scss';
// == Composant
const BurgerMenu = ({
  handleTogglerClick,
}) => {
  const handleOnClick = () => {
    handleTogglerClick();
  };

  return (
    <>
      <div className="burger">
        <button
          type="button"
          className="burger__button"
          onClick={handleOnClick}
        >
          ☰
        </button>

      </div>

    </>
  );
};

export default BurgerMenu;
