import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from '@/components/shared/Card';

const RevealCardSide = styled(Card)`
  position: absolute;
  ${({ theme }) => theme['inset-0']};
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  cursor: pointer;
  transition: transform 0.5s;
`;

const RevealCardSideBack = styled(RevealCardSide)`
  transform: rotateY(-180deg);
  cursor: ${({ activeOnHover }) => activeOnHover ? 'pointer' : 'default'};
`;

const RevealCardWrapper = styled.div`
  position: relative;
  width: ${({ theme }) => theme.rem(120)};
  height: ${({ theme }) => theme.rem(120)};
  margin: ${({ theme }) => theme.rem(10)};
  perspective: 1000;

  &.active, &.active-hover:hover {
    ${/* sc-selector */ RevealCardSide} {
      transform: rotateY(180deg);
    }

    ${/* sc-selector */ RevealCardSideBack} {
      transform: rotateY(0deg);
    }
  }
`;

const RevealCard = ({ className, onClick, activeOnHover, frontSlot, backSlot }) => {
  const cssClasses = `${className} ${activeOnHover ? 'active-hover' : ''}`;

  return (
    <RevealCardWrapper
      className={cssClasses}
      onClick={onClick}
    >
      <RevealCardSide >
        {frontSlot}
      </RevealCardSide>
      <RevealCardSideBack
        activeOnHover={activeOnHover}
      >
        {backSlot}
      </RevealCardSideBack>
    </RevealCardWrapper>
  );
};

RevealCard.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  activeOnHover: PropTypes.bool,
  backSlot: PropTypes.any,
  frontSlot: PropTypes.any
};

export default RevealCard;