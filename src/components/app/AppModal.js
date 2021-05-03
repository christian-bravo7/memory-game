import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { hideModal } from '@/store/modal/actionCreators';

import Card from '@/components/shared/Card';

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

const AppModal = ({ isActive, isClosable, component, hideModal }) => {
  return (
    createPortal(
      isActive &&
      <ModalBackdrop>
        <ModalCard>
          { isClosable &&
            <ModalCloseButton onClick={hideModal} >
              x
            </ModalCloseButton>
          }
          <div>{component}</div>
        </ModalCard>
      </ModalBackdrop>,
      document.getElementById('modal-root')
    )
  );
};

const mapStateToProps = (state) => ({
  isActive: state.modal.isActive,
  isClosable: state.modal.isClosable,
  component: state.modal.component,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ hideModal }, dispatch)
});

AppModal.propTypes = {
  isActive: PropTypes.bool,
  isClosable: PropTypes.bool,
  component: PropTypes.element,
  hideModal: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(AppModal);