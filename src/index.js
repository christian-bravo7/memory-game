import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from '@/App';
import theme from '@/theme';
import reportWebVitals from '@/reportWebVitals';

import { GameSettingsContextProvider } from '@/context/GameSettingsContext';
import { ModalContextProvider } from '@/context/ModalContext';

import '@/index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ModalContextProvider>
        <GameSettingsContextProvider>
          <App />
        </GameSettingsContextProvider>
      </ModalContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
