import React, { useContext, useState } from 'react';

import MemoryDashboard from './components/memory/MemoryDashboard';

import 'normalize.css';
import { ModalContext, ModalContextProvider } from './context/ModalContext';
import { GameSettingsContextProvider } from './context/GameSettingsContext';

import AppModal from './components/app/AppModal';
import GameSettingsModalTemplate from '@/components/settings/GameSettingsModalTemplate';

const App = () => {
  const [ availableCards ] = useState(4);
  
  return (
    <ModalContextProvider>
      <GameSettingsContextProvider>
        <MemoryDashboard cards={availableCards} />
        <ButtonOpen />
        <AppModal />
      </GameSettingsContextProvider>
    </ModalContextProvider>
  );
};

const ButtonOpen = () => {
  const [[,,openModal], [,setComponent]] = useContext(ModalContext);

  const setNewComponent = () => {
    setComponent(<GameSettingsModalTemplate />);
    openModal();
  };

  return (
    <button onClick={setNewComponent}>Click</button>
  );
  
};

export default App;
