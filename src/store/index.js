import { createStore, combineReducers } from 'redux';

import modalReducer from '@/store/modal/modalReducer';
import gameSettingsReducer from '@/store/game-settings/gameSettingsReducer';

const reducers = combineReducers({
  modal: modalReducer,
  gameSettings: gameSettingsReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;