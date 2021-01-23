import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [isOpen, updateOpenState] = useState(false);
  const [canClose, updateCanCloseState] = useState(true);
  const [component, updateComponent] = useState(null);

  const openModal = () => { updateOpenState(true); };
  const closeModal = () => { updateOpenState(false); };

  return (
    <ModalContext.Provider 
      value={[
        [isOpen, canClose, openModal, closeModal, updateCanCloseState], 
        [component, updateComponent]
      ]}
    >
      {children}
    </ModalContext.Provider>
  );
};

ModalContextProvider.propTypes = {
  children: PropTypes.any
};