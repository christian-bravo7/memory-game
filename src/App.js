import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

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
  return (
    <AppContainer>
      <Switch>
        <Route
          exact
          path="/"
          component={GameMenu}
        ></Route>
        <Route
          exact
          path="/game"
          component={MemoryDashboard}
        ></Route>
      </Switch>
      <AppModal />
    </AppContainer>
  );
};

export default App;
