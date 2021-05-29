// == Import npm
import React from 'react';

// == Import
import './styles.scss';

// == Composant
const Home = ({ children }) => {
  return (
    <>
      <main className="main">
        {children}
      </main>

    </>
  );
};

// == Export
export default Home;
