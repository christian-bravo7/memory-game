import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MemoryCardPlaceholder from './MemoryCardPlaceholder';

const maxWidthByCardsNumber = (cardsNumber) => {
  return cardsNumber < 8 
    ? '100px' 
    : cardsNumber < 16
      ? '150px'
      : cardsNumber < 24
        ? '200px'
        : '250px';
};

const MemoryBoardPlaceholder = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: ${({ cards }) => maxWidthByCardsNumber(cards)};
`;


const MemoryDashboard = ({ cards }) => {

  return (
    <MemoryBoardPlaceholder cards={cards}>
      {
        [...Array(cards)].map((_, index) => 
          <MemoryCardPlaceholder 
            key={index} 
          />
        )
      }
    </MemoryBoardPlaceholder>
  );
};

MemoryDashboard.propTypes = {
  cards: PropTypes.number.isRequired
};

export default MemoryDashboard;