import React from 'react';
import options from '../data/options.json';
import { shuffle } from '../utils';

function useBingoBoard() {
  const [shuffledOptions, setShuffledOptions] = React.useState<string[]>([]);

  React.useEffect(() => {
    setShuffledOptions(shuffle(options));
  }, []);

  return {
    rows: [
      shuffledOptions.slice(0, 4),
      shuffledOptions.slice(4, 8),
      shuffledOptions.slice(8, 12),
      shuffledOptions.slice(12, 16),
    ],
  };
}

export default useBingoBoard;
