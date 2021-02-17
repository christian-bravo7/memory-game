import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MemoryCard from '@/components/memory/MemoryCard';
import { GameSettingsContext } from '@/context/GameSettingsContext';

const maxWidthByCardsNumber = (cardsNumber) => {
  return cardsNumber < 8
    ? '400px'
    : cardsNumber < 16
      ? '600px'
      : cardsNumber < 24
        ? '800px'
        : '1000px';
};

const StyledMemoryDashboard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: ${({ cards }) => maxWidthByCardsNumber(cards)};
`;

const MemoryDashboardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 40px);
  margin: 0 auto;
`;

const MemoryDashboard = () => {

  const {
    cardAmounts,
    activeCards,
    numberPairsState,
    handleCardActiveState } = useContext(GameSettingsContext);

  const cardActiveClass = (index) => {
    return activeCards.includes(index) ? 'active' : '';
  };

  return (
    <MemoryDashboardWrapper>
      <StyledMemoryDashboard cards={cardAmounts}>
        {
          numberPairsState.map((number, index) =>
            <MemoryCard
              key={index}
              image={require(`../../assets/img/food/${number}.svg`).default}
              className={`${cardActiveClass(index)}`}
              onClick={() => handleCardActiveState(index)}
            />
          )
        }
      </StyledMemoryDashboard>
    </MemoryDashboardWrapper>
  );
};

MemoryDashboard.propTypes = {
  cards: PropTypes.number.isRequired
};

export default MemoryDashboard;