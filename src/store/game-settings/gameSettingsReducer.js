import generateRandomNumberPairs from '@/utils/generateRandomNumberPairs';

import {
  SET_CARD_AMOUNTS,
  SET_GAME_STEP,
  SET_ACTIVE_CARDS
} from '@/store/game-settings/actionTypes';

const initialState = {
  cardAmounts: 4,
  activeCards: [],
  gameStep: 'menu',
  numberPairs: generateRandomNumberPairs(4),
};

const setActiveCards = (state, { cardIndex }) => ({
  ...state,
  activeCards: [...state.activeCards, cardIndex]
});

const setCardAmounts = (state, { cards }) => ({
  ...state,
  cardAmounts: cards,
  numberPairs: generateRandomNumberPairs(cards / 2)
});

const setGameStep = (state, { step }) => ({
  ...state,
  gameStep: step
});

const gameSettingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_CARD_AMOUNTS:
    return setCardAmounts(state, payload);
  case SET_GAME_STEP:
    return setGameStep(state, payload);
  case SET_ACTIVE_CARDS:
    return setActiveCards(state, payload);
  default:
    return state;
  }
};

export default gameSettingsReducer;