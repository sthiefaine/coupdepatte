/* eslint-disable no-unused-expressions */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

// == Composant
const Buttons = ({
  title,
  width,
  padding,
  primaryColor,
  secondaryColor,
  textColor,
  type,
}) => {
  const Button = styled.button`
    display: block;
    margin: var(--gutter) auto;
    padding: ${padding}; 
    font-size: var(--gutter);
    width: ${width};
    text-align: center;

    background: -webkit-linear-gradient(176deg, var(--primary-color) 0%, var(--primary-color-dark) 100%);
    background: -moz-linear-gradient(176deg, var(--primary-color) 0%, var(--primary-color-dark) 100%);
    background: -ms-linear-gradient(176deg, var(--primary-color) 0%, var(--primary-color-dark) 100%);
    background: -o-linear-gradient(176deg, var(--primary-color) 0%, var(--primary-color-dark) 100%);
    background: linear-gradient(176deg, var(--primary-color) 0%, var(--primary-color-dark) 100%);
    border-radius: calc(var(--radius) / 2);
    box-shadow: var(--primary-box-shadow);
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
    border: none;
    transition: 0.2s;
    color: ${textColor};

    &:hover{
      color: black;
      background: linear-gradient( var(--primary-color-light), var(--primary-color-dark));
    }

    &:active{
      color: black;
      background: linear-gradient( var(--primary-color-light-2), var(--primary-color-dark-lighten));
      box-shadow: 1px 1px 5px grey inset;        
  }
  `;
  return (
    <>
      <Button
        type={type}
      >{title}
      </Button>
    </>
  );
};

Buttons.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  textColor: PropTypes.string,
  type: PropTypes.string,
};

Buttons.defaultProps = {
  title: 'Afficher',
  primaryColor: 'default',
  secondaryColor: 'default',
  width: '50%',
  padding: 'calc(var(--gutter) / 2)',
  textColor: 'white',
  type: 'button',
};

export default Buttons;
