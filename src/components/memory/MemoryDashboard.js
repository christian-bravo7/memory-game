import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import proptypes from 'prop-types';

import MemoryCard from '@/components/memory/MemoryCard';

import {setActiveCards} from '@/store/game-settings/actionCreators';

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

const StyledMemoryCard = styled(MemoryCard)`
  margin: 8px;
`;

const MemoryDashboard = ({ cardAmounts, activeCards, numberPairs, setActiveCards }) => {
  const cardActiveClass = (index) => activeCards.includes(index) ? 'active' : '';

  return (
    <MemoryDashboardWrapper>
      <StyledMemoryDashboard cards={cardAmounts}>
        {
          numberPairs.map((number, index) =>
            <StyledMemoryCard
              key={index}
              image={require(`../../assets/img/food/${number}.svg`).default}
              className={`${cardActiveClass(index)}`}
              onClick={() => setActiveCards(index)}
            />
          )
        }
      </StyledMemoryDashboard>
    </MemoryDashboardWrapper>
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