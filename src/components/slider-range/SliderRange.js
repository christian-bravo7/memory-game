import React,{useEffect} from 'react';
import PropTypes from 'prop-types';

const SliderRange = (props) => {

  useEffect(()=>{
    const ele = document.querySelector('.buble');
    if (ele) {
      ele.style.left = `${Number(props.value / 4)}px`;
    }
  });

  return (
    <div>
      <input step="2" type="range" min="4" max="20" value={props.value}
        onChange={({ target: { value: radius } }) => {
          props.onChange(Number(radius));
        }}
      />
      <div className="buble"> 
        {props.value}
      </div>
    </div>
  );
};

SliderRange.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SliderRange;