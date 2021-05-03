import {
  SET_ACTIVE_CARDS,
  SET_CARD_AMOUNTS,
} from '@/store/game-settings/actionTypes';

export const setActiveCards = (cardIndex) => ({
  type: SET_ACTIVE_CARDS,
  payload: { cardIndex }
});

export const setTotalCardsInGame = (cards) => ({
  type: SET_CARD_AMOUNTS,
  payload: { cards }
});