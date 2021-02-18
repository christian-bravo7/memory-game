import React from 'react';
import PropTypes from 'prop-types';

import RevealCard from '@/components/reveal-card/RevealCard';

const MemoryCard = ({ image, onClick, className }) => {
  return (
    <RevealCard
      className={className}
      onClick={onClick}
      backSlot={<img src={image} alt="card asset"></img>}
    />
  );
};

MemoryCard.propTypes = {
  image: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default MemoryCard;