import React, { useContext } from 'react';

import { ModalContext } from '@/context/ModalContext';

import GameSettingsModalTemplate from '@/components/settings/GameSettingsModalTemplate';
import GameMenuButton from '@/components/game-menu/GameMenuButton';

const GameMenu = () => {
  const {openModal, updateComponent} = useContext(ModalContext);

  const setNewComponent = () => {
    updateComponent(<GameSettingsModalTemplate />);
    openModal();
  };

  return (
    <div>
      <GameMenuButton onClick={setNewComponent} />
    </div>
  );
};

export default GameMenu;