import React, { useContext, useState } from 'react';

import { ModalContext, ModalContextProvider } from './context/ModalContext';
import { GameSettingsContextProvider } from './context/GameSettingsContext';

import AppModal from './components/app/AppModal';
import GameSettingsModalTemplate from './components/settings/GameSettingsModalTemplate';
import MemoryDashboard from './components/memory/MemoryDashboard';

import 'minireset.css';

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
  const {openModal, updateComponent} = useContext(ModalContext);

  const setNewComponent = () => {
    updateComponent(<GameSettingsModalTemplate />);
    openModal();
  };

  return (
    <button onClick={setNewComponent}>Click</button>
  );
  
};

export default App;
