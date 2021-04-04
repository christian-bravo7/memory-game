import React, { useContext } from 'react';
import styled from 'styled-components';

import { GameSettingsContext } from '@/context/GameSettingsContext';

import AppModal from '@/components/app/AppModal';
import GameMenu from '@/components/game-menu/GameMenu';
import MemoryDashboard from '@/components/memory/MemoryDashboard';

import 'minireset.css';

const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = () => {

  const { gameStep } = useContext(GameSettingsContext);

  const isMenuActive = gameStep === 'menu';

  return (
    <AppContainer>
      {
        isMenuActive ? <GameMenu /> : <MemoryDashboard />
      }
      <AppModal />
    </AppContainer>
  );
};

export default App;
