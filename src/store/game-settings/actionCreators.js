import {
  SET_ACTIVE_CARDS,
  SET_CARD_AMOUNTS,
  SET_GAME_STEP
} from '@/store/game-settings/actionTypes';

export const setActiveCards = (cardIndex) => ({
  type: SET_ACTIVE_CARDS,
  payload: { cardIndex }
});

export const setCardAmounts = (cards) => ({
  type: SET_CARD_AMOUNTS,
  payload: { cards }
});

export const setGameStep = (step) => ({
  type: SET_GAME_STEP,
  payload: { step }
});