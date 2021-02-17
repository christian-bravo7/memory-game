import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '@/components/shared/Card';

const MemoryCardSide = styled(Card)`
  position: absolute;
  ${({ theme }) => theme['inset-0']};
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  cursor: pointer;
  transition: transform 0.5s;
`;

const MemoryCardSideBack = styled(MemoryCardSide)`
  transform: rotateY(-180deg);
  cursor: default;
`;

const StyledMemoryCardWrapper = styled.div`
  position: relative;
  width: ${({ theme }) => theme.rem(120)};
  height: ${({ theme }) => theme.rem(120)};
  margin: ${({ theme }) => theme.rem(10)};
  perspective: 1000;

  &.active {
    ${/* sc-selector */ MemoryCardSide} {
      transform: rotateY(180deg);
    }

    ${/* sc-selector */ MemoryCardSideBack} {
      transform: rotateY(0deg);
    }
  }

`;

const MemoryCard = ({ image, onClick, className }) => {
  return (
    <StyledMemoryCardWrapper
      className={className}
      onClick={onClick}
    >
      <MemoryCardSide />
      <MemoryCardSideBack>
        <img src={image} alt="card asset"></img>
      </MemoryCardSideBack>
    </StyledMemoryCardWrapper>
  );
};

MemoryCard.propTypes = {
  image: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default MemoryCard;