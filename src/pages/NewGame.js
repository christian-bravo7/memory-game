import React from 'react';
import proptypes from 'prop-types';
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

const MemoryDashboard = ({ cardAmounts, activeCards, numberPairs, setActiveCards }) => {
  const cardActiveClass = (index) => activeCards.includes(index) ? 'active' : '';

  if (cardAmounts === 0) {
    return (<Redirect to="/"></Redirect>);
  }

  return (
    <NewGameContainer>
      <NewGameBoard cards={cardAmounts}>
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
  cardAmounts: state.gameSettings.cardAmounts,
  activeCards: state.gameSettings.activeCards,
  numberPairs: state.gameSettings.numberPairs,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ setActiveCards }, dispatch),
});

MemoryDashboard.propTypes = {
  cardAmounts: proptypes.number.isRequired,
  activeCards: proptypes.array.isRequired,
  numberPairs: proptypes.array.isRequired,
  setActiveCards: proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MemoryDashboard);