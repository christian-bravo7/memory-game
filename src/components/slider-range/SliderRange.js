import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSliderRange = styled.div`
  position: relative;
`;

const RangeInput = styled.input`
  cursor: pointer;
`;

const RangeBubble = styled.div`
  position: absolute;
  top: ${({ theme }) => `calc(100% + ${theme.rem(5)})`};
  left: ${({ value }) => `${((value * 7.25) - 32.5)}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.rem(22)};
  height: ${({ theme }) => theme.rem(22)};
  color: white;
  font-size: ${({ theme }) => theme.rem(12)};
  background-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  cursor: default;
  user-select: none;

  &::before {
    position: absolute;
    top: ${({ theme }) => theme.rem(0)};
    left: 49%;
    width: ${({ theme }) => theme.rem(8)};
    height: ${({ theme }) => theme.rem(8)};
    background-color: ${({ theme }) => theme.primary};
    transform: rotate(45deg) translateX(-50%);
    content: '';
  }
`;

const SliderRange = ({ value, onChange }) => {

  const handleChange = ({ target: { value: radius } }) => {
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
        onChange={handleChange}
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