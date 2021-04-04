import {
  DISPLAY_MODAL_WITH_COMPONENT,
  HIDE_MODAL
} from '@/store/modal/actionTypes';

const initialState = {
  isActive: false,
  isClosable: true,
  component: null,
};

const displayModalWithComponent = (state, { component, isClosable }) => ({
  ...state,
  isActive: true,
  isClosable,
  component
});

const hideModal = (state) => ({
  ...state,
  isActive: false,
  isClosable: true,
  component: null
});

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
  case DISPLAY_MODAL_WITH_COMPONENT:
    return displayModalWithComponent(state, payload);
  case HIDE_MODAL:
    return hideModal(state);
  default:
    return state;
  }
};

export default modalReducer;