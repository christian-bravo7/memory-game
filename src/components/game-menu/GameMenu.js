import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { displayModalWithComponent } from '@/store/modal/actionCreators';

import GameSettingsModalTemplate from '@/components/settings/GameSettingsModalTemplate';
import RevealCard from '@/components/reveal-card/RevealCard';

import cardsImage from '@/assets/img/global/cards.svg';
import rollerImage from '@/assets/img/global/roller.svg';
import excaliburImage from '@/assets/img/global/excalibur.svg';

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

const GameMenuControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: ${({ theme }) => theme.rem(16)};
  line-height: 1.5;
  text-align: center;
  border-radius: ${({ theme }) => theme.rem(20)};
`;

const GameMenuControlWithImage = ({ image }) => (
  <img
    src={image}
    alt="control"
  />
);

GameMenuControlWithImage.propTypes = {
  image: PropTypes.string,
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
          frontSlot={<GameMenuControlWithImage image={cardsImage} />}
          backSlot={<GameMenuControl>Start new game</GameMenuControl>}
        />
        <RevealCard
          onClick={setNewComponent}
          activeOnHover={true}
          frontSlot={<GameMenuControlWithImage image={rollerImage} />}
          backSlot={<GameMenuControl>Customize game</GameMenuControl>}
        />
        <RevealCard
          onClick={setNewComponent}
          activeOnHover={true}
          frontSlot={<GameMenuControlWithImage image={excaliburImage} />}
          backSlot={<GameMenuControl>Scoreboard</GameMenuControl>}
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