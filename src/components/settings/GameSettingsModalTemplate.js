import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { hideModal } from '@/store/modal/actions';

import Text from '@/components/shared/Text';
import AppButton from '@/components/shared/AppButton';
import SliderRange from '@/components/slider-range/SliderRange';
import MemoryBoardPlaceholder from '@/components/memory/placeholders/MemoryBoardPlaceholder';

import { GameSettingsContext } from '@/context/GameSettingsContext';

const StyledGameSettingsModalTemplate = styled.div`
  display: flex;
  flex-direction: column;
`;

const MemoryBoardContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: ${({ theme }) => theme.rem(250)};
  margin-bottom: ${({ theme }) => theme.rem(20)};
`;

const StartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const GameSettingsModalTemplate = ({ hideModal }) => {
  const [ availableCards, updateAvailableCards ] = useState(4);
  const { setCardAmounts, setGameStep } = useContext(GameSettingsContext);

  const startGame = () => {
    setCardAmounts(availableCards);
    setGameStep('game');
    hideModal();
  };

  return (
    <StyledGameSettingsModalTemplate>
      <Text
        bold={true}
        size={24}
        marginB={14}
      >
          Welcome
      </Text>
      <Text marginB={14}>
        Select the number of cards
      </Text>
      <SliderRange
        value={availableCards}
        onChange={updateAvailableCards}
      />
      <MemoryBoardContainer>
        <MemoryBoardPlaceholder cards={availableCards} />
      </MemoryBoardContainer>
      <StartButtonContainer>
        <AppButton onClick={startGame}>
          Start
        </AppButton>
      </StartButtonContainer>
    </StyledGameSettingsModalTemplate>
  );
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ hideModal }, dispatch)
});

GameSettingsModalTemplate.propTypes = {
  hideModal: PropTypes.func
};

export default connect(null, mapDispatchToProps)(GameSettingsModalTemplate);