// == Import npm
import React, { useEffect } from 'react';

// == Import
import Presentation from 'src/containers/Presentation';

import Nav from 'src/containers/Nav';

import SearchBar from 'src/components/SearchBar';

import Section from 'src/containers/Section';

// == Composant

// type is a props passed in App components
const Lists = (
  {
    type,
    scrollValue,
    scrollToTop,
    asideIsOpen,
  },
) => {
  useEffect(() => {
    scrollToTop(true);
    if (scrollValue && !asideIsOpen) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Presentation />

      <div className="section">
        <Nav />
        <SearchBar />
      </div>

      <Section target={type} />
    </>
  );
};

// == Export
export default Lists;
