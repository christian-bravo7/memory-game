import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import Text from '@/components/shared/Text';
import AppButton from '@/components/shared/AppButton';
import SliderRange from '@/components/slider-range/SliderRange';
import MemoryBoardPlaceholder from '@/components/memory/placeholders/MemoryBoardPlaceholder';

import { ModalContext } from '@/context/ModalContext';
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

const GameSettingsModalTemplate = () => {
  const [ availableCards, updateAvailableCards ] = useState(4);
  const { setCardAmounts, setGameStep } = useContext(GameSettingsContext);
  const { closeModal } = useContext(ModalContext);

  const startGame = () => {
    setCardAmounts(availableCards);
    setGameStep('game');
    closeModal();
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

export default GameSettingsModalTemplate;