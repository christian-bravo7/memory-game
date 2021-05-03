import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import AppModal from '@/components/app/AppModal';
import GameMenu from '@/components/game-menu/GameMenu';
import MemoryDashboard from '@/components/memory/MemoryDashboard';

import 'minireset.css';

const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const App = ({gameStep}) => {
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

const mapStateToProps = (state) => ({
  gameStep: state.gameSettings.gameStep
});

App.propTypes = {
  gameStep: propTypes.string
};

export default connect(mapStateToProps)(App);
