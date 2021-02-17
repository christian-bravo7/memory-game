import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import generateRandomNumberPairs from '@/utils/generateRandomNumberPairs';

export const GameSettingsContext = createContext();

export const GameSettingsContextProvider = props => {
  const [cardAmounts, setCardAmounts] = useState(4);

  const numberPairs = generateRandomNumberPairs(cardAmounts / 2);
  const [numberPairsState, setNumberPairsState] = useState(numberPairs);
  const [activeCards, setActiveCards] = useState([]);

  const handleCardActiveState = (cardIndex) => {
    setActiveCards((activeCards) => [...activeCards, cardIndex]);
  };

  useEffect(() => {
    setNumberPairsState(() => generateRandomNumberPairs(cardAmounts / 2));
  }, [cardAmounts]);

  return (
    <GameSettingsContext.Provider
      value={
        {
          cardAmounts,
          activeCards,
          setCardAmounts,
          numberPairsState,
          handleCardActiveState,
        }
      }>
      {props.children}
    </GameSettingsContext.Provider>
  );
};

GameSettingsContextProvider.propTypes = {
  children: PropTypes.any
};