import React, { useContext } from 'react';

import { GameSettingsContext } from '@/context/GameSettingsContext';

import AppModal from '@/components/app/AppModal';
import GameMenu from '@/components/game-menu/GameMenu';
import MemoryDashboard from '@/components/memory/MemoryDashboard';

import 'minireset.css';

const App = () => {

  const { gameStep } = useContext(GameSettingsContext);

  const isMenuActive = gameStep === 'menu';

  return (
    <div>
      {
        isMenuActive ? <GameMenu /> : <MemoryDashboard />
      }
      <AppModal />
    </div>
  );
};

export default App;
