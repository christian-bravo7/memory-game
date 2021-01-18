import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MemoryCard from './MemoryCard';
import generateRandomNumberPairs from '../../utils/generateRandomNumberPairs';

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

const MemoryDashboard = ({ cards }) => {

  const randomNumberPairs = generateRandomNumberPairs(cards / 2);
  const [numberPairs, setNumberPairs] = useState(randomNumberPairs);
  const [activeCards, setActiveCards] = useState([]);

  const handleCardActiveState = (cardIndex) => {
    setActiveCards((activeCards) => [...activeCards, cardIndex]);
  };

  const cardActiveClass = (index) => {
    return activeCards.includes(index) ? 'active' : '';
  };

  useEffect(() => {
    setNumberPairs(() => generateRandomNumberPairs(cards / 2));
  }, [cards]);

  return (
    <MemoryDashboardWrapper>
      <StyledMemoryDashboard cards={cards}>
        {
          numberPairs.map((number, index) => 
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