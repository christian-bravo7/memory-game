import React, { useState } from 'react';
import styled from 'styled-components';
import AppButton from '../app/AppButton';

import MemoryBoardPlaceholder from '../memory/placeholders/MemoryBoardPlaceholder';
import Title from '../shared/Title';
import SliderRange from '../slider-range/SliderRange';

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

  return (
    <StyledGameSettingsModalTemplate>
      <Title>Hello</Title>
      <SliderRange value={availableCards} onChange={updateAvailableCards} />
      <MemoryBoardContainer>
        <MemoryBoardPlaceholder cards={availableCards} />
      </MemoryBoardContainer>
      <StartButtonContainer>
        <AppButton>Start</AppButton>
      </StartButtonContainer>
    </StyledGameSettingsModalTemplate>
  );
};

export default GameSettingsModalTemplate;