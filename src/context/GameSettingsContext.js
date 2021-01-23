import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const GameSettingsContext = createContext();

export const GameSettingsContextProvider = props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GameSettingsContext.Provider value={[isOpen, setIsOpen]}>
      {props.children}
    </GameSettingsContext.Provider>
  );
};

GameSettingsContextProvider.propTypes = {
  children: PropTypes.any
};