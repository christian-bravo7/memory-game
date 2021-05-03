import {
  HIDE_MODAL,
  DISPLAY_MODAL_WITH_COMPONENT
} from '@/store/modal/actionTypes';

export const displayModalWithComponent = ({ component, isClosable = true }) => ({
  type: DISPLAY_MODAL_WITH_COMPONENT,
  payload: {
    component,
    isClosable
  }
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});