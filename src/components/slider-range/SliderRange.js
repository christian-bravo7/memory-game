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
  bottom: ${({ value }) => `${value * 1.5}px`};
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