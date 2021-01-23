import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSliderRange = styled.div`
  position: relative;
  /* transform: rotate(-90deg); */
`;

const RangeInput = styled.input`
  /* transform-origin: 75px 75px; */
`;

const RangeBubble = styled.div`
  position: absolute;
  top: 100%;
  left: ${({ value }) => `${(value * 6) - 2}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.rem(22)};
  height: ${({ theme }) => theme.rem(22)};
  color: white;
  font-size: ${({ theme }) => theme.rem(12)};
  background-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
`;

const SliderRange = ({ value, onChange }) => {

  const onSliderChange = ({ target: { value: radius } }) => {
    onChange(Number(radius));
  };

  return (
    <StyledSliderRange>
      <RangeInput 
        step="2" 
        type="range" 
        min="4" 
        max="20" 
        value={value}
        onChange={onSliderChange}
      />
      <RangeBubble value={value}> 
        {value}
      </RangeBubble>
    </StyledSliderRange>
  );
};

SliderRange.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SliderRange;