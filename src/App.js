import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import NewGame from '@/pages/NewGame';
import GameMenu from '@/pages/GameMenu';
import Modal from '@/components/modal/Modal';

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
          path="/new-game"
          component={NewGame}
        ></Route>
      </Switch>
      <Modal />
    </AppContainer>
  );
};

export default App;
