import generateRandomNumberPairs from '@/utils/generateRandomNumberPairs';

import {
  SET_CARD_AMOUNTS,
  SET_ACTIVE_CARDS
} from '@/store/game-settings/actionTypes';

const initialState = {
  totalCardsInGame: 0,
  activeCards: [],
  numberPairs: [],
};

const setActiveCards = (state, { cardIndex }) => ({
  ...state,
  activeCards: [...state.activeCards, cardIndex]
});

const setTotalCardsInGame = (state, { cards }) => ({
  ...state,
  totalCardsInGame: cards,
  numberPairs: generateRandomNumberPairs(cards / 2)
});


const gameSettingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case SET_CARD_AMOUNTS:
    return setTotalCardsInGame(state, payload);
  case SET_ACTIVE_CARDS:
    return setActiveCards(state, payload);
  default:
    return state;
  }
};

export default gameSettingsReducer;