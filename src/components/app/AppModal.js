import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '@/components/shared/Card';

import { ModalContext } from '@/context/ModalContext';

const ModalBackdrop = styled.section`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme['inset-0']};
  background: rgba(0,0,0,0.5);
`;

const ModalCard = styled(Card)`
  position: relative;
  width: 100%;
  max-width: ${({ theme }) => theme.rem(800)};
  padding: ${({ theme }) => theme.rem(30)};
  background-color: #fbfbfb;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.rem(-10)};
  right: ${({ theme }) => theme.rem(-10)};
  width: ${({ theme }) => theme.rem(40)};
  height: ${({ theme }) => theme.rem(40)};
  padding: ${({ theme }) => theme.rem(10)};
  background-color: white;
  border: none;
  border-radius: ${({ theme }) => theme.rem(14)};
  box-shadow: ${({ theme }) => theme.shadow()};
  cursor: pointer;
  transition-duration: 0.2s;
  transition-property: top, right, box-shadow;

  &:hover {
    top: ${({ theme }) => theme.rem(-11)};
    right: ${({ theme }) => theme.rem(-11)};
    box-shadow: ${({ theme }) => theme.shadow('#000000')};
  }
`;

const AppModal = () => {
  const {
    isOpen,
    canClose,
    closeModal,
    component
  } = useContext(ModalContext);

  return (
    createPortal(
      isOpen &&
      <ModalBackdrop>
        <ModalCard>
          { canClose &&
            <ModalCloseButton onClick={closeModal} >x</ModalCloseButton>
          }
          <div>{component}</div>
        </ModalCard>
      </ModalBackdrop>,
      document.getElementById('modal-root')
    )
  );
};

AppModal.propTypes = {
  canClose: PropTypes.bool,
};

export default AppModal;