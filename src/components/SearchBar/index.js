import React from 'react';

import './styles.scss';

const searchBar = () => {
  return (
    <div className="main__searchBar">
      <button
        className="main__searchBarButton"
        type="button"
        disabled
      >
        Trier
      </button>
    </div>
  );
};

export default searchBar;
