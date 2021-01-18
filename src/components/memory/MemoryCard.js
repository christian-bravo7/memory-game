import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MemoryCardSide = styled.div`
  position: absolute;
  ${({ theme }) => theme['inset-0']};
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: ${({ theme }) => theme.rem(20)};
  box-shadow: ${({ theme }) => theme.shadow()};
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transition: transform 0.5s;
`;

const MemoryCardSideBack = styled(MemoryCardSide)`
  padding: ${({ theme }) => theme.rem(10)};
  background-color: white;
  transform: rotateY(-180deg);
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
        <img src={image} alt="food"></img>
      </MemoryCardSideBack>
    </StyledMemoryCardWrapper>
  );
};

MemoryCard.propTypes = {
  children: PropTypes.any,
  image: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default MemoryCard;