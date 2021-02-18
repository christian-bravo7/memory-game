import React from 'react';
import PropTypes from 'prop-types';

import RevealCard from '@/components/reveal-card/RevealCard';

const GameMenuButton = ({ onClick }) => {
  return (
    <RevealCard
      onClick={onClick}
      activeOnHover={true}
      frontSlot="Hello"
      backSlot="World"
    />
  );
};

GameMenuButton.propTypes = {
  onClick: PropTypes.func
};

export default GameMenuButton;