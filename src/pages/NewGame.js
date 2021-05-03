import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import MemoryCard from '@/components/new-game/MemoryCard';

import { setActiveCards } from '@/store/game-settings/actionCreators';

const maxWidthByCardsNumber = (cardsNumber) => {
  return cardsNumber < 8
    ? '400px'
    : cardsNumber < 16
      ? '600px'
      : cardsNumber < 24
        ? '800px'
        : '1000px';
};

const NewGameBoard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: ${({ cards }) => maxWidthByCardsNumber(cards)};
`;

const NewGameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 40px);
  margin: 0 auto;
`;

const StyledMemoryCard = styled(MemoryCard)`
  margin: 8px;
`;

const MemoryDashboard = ({ totalCardsInGame, activeCards, numberPairs, setActiveCards }) => {
  const cardActiveClass = (index) => activeCards.includes(index) ? 'active' : '';

  if (totalCardsInGame === 0) {
    return (<Redirect to="/"></Redirect>);
  }

  return (
    <NewGameContainer>
      <NewGameBoard cards={totalCardsInGame}>
        {
          numberPairs.map((number, index) =>
            <StyledMemoryCard
              key={index}
              image={require(`../assets/img/food/${number}.svg`).default}
              className={`${cardActiveClass(index)}`}
              onClick={() => setActiveCards(index)}
            />
          )
        }
      </NewGameBoard>
    </NewGameContainer>
  );
};

const mapStateToProps = (state) => ({
  totalCardsInGame: state.gameSettings.totalCardsInGame,
  activeCards: state.gameSettings.activeCards,
  numberPairs: state.gameSettings.numberPairs,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ setActiveCards }, dispatch),
});

MemoryDashboard.propTypes = {
  totalCardsInGame: propTypes.number.isRequired,
  activeCards: propTypes.array.isRequired,
  numberPairs: propTypes.array.isRequired,
  setActiveCards: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MemoryDashboard);