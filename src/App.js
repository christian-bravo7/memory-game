import React, { useState } from 'react';

import MemoryDashboard from './components/memory/MemoryDashboard';
import SliderRange from './components/slider-range/SliderRange';

import 'normalize.css';

const App = () => {
  const [ availableCards, updateAvailableCards ] = useState(4);

  return (
    <div className="App">
      <SliderRange value={availableCards} onChange={updateAvailableCards} />
      <MemoryDashboard cards={availableCards} />
    </div>
  );
};

export default App;
