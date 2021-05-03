import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MemoryCardPlaceholder from '@/components/new-game/placeholders/MemoryCardPlaceholder';

const maxWidthByCardsNumber = (cardsNumber) => {
  return cardsNumber < 8
    ? '100px'
    : cardsNumber < 18
      ? '200px'
      : cardsNumber < 24
        ? '280px'
        : '350px';
};

const MemoryBoardPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${({ cards }) => maxWidthByCardsNumber(cards)};
`;

const MemoryBoardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;


const MemoryDashboard = ({ cards }) => {

  return (
    <MemoryBoardPlaceholder cards={cards}>
      <MemoryBoardWrapper>
        {
          [...Array(cards)].map((_, index) =>
            <MemoryCardPlaceholder
              key={index}
            />
          )
        }
      </MemoryBoardWrapper>
    </MemoryBoardPlaceholder>
  );
};

MemoryDashboard.propTypes = {
  cards: PropTypes.number.isRequired
};

export default MemoryDashboard;