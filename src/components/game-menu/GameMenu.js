import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { displayModalWithComponent } from '@/store/modal/actions';

import GameSettingsModalTemplate from '@/components/settings/GameSettingsModalTemplate';
import RevealCard from '@/components/reveal-card/RevealCard';

const GameMenuContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const GameMenuControls = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: ${({ theme }) => theme.rem(24)};
  align-items: center;
`;

const GameMenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: ${({ theme }) => theme.rem(16)};
  line-height: 1.5;
  text-align: center;
  border-radius: ${({ theme }) => theme.rem(20)};
`;

const GameMenuButtonWithImage = ({ imageName }) => {
  const image = require(`../../assets/img/global/${imageName}.svg`).default;

  return (
    <img
      src={image}
      alt={imageName}
    />
  );
};

GameMenuButtonWithImage.propTypes = {
  imageName: PropTypes.string,
};


const GameMenu = ({ displayModalWithComponent }) => {
  const setNewComponent = () => {
    displayModalWithComponent({ component: <GameSettingsModalTemplate /> });
  };

  return (
    <GameMenuContainer>
      <GameMenuControls>
        <RevealCard
          onClick={setNewComponent}
          activeOnHover={true}
          frontSlot={<GameMenuButtonWithImage imageName="cards" />}
          backSlot={<GameMenuButton>Start new game</GameMenuButton>}
        />
        <RevealCard
          onClick={setNewComponent}
          activeOnHover={true}
          frontSlot={<GameMenuButtonWithImage imageName="roller" />}
          backSlot={<GameMenuButton>Customize game</GameMenuButton>}
        />
        <RevealCard
          onClick={setNewComponent}
          activeOnHover={true}
          frontSlot={<GameMenuButtonWithImage imageName="excalibur" />}
          backSlot={<GameMenuButton>Scoreboard</GameMenuButton>}
        />
      </GameMenuControls>
    </GameMenuContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ displayModalWithComponent }, dispatch)
});

GameMenu.propTypes = {
  displayModalWithComponent: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(GameMenu);