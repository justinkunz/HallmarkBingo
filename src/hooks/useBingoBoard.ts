import React from 'react';
import arrayfriend from 'arrayfriend';
import options from '../data/options.json';
import copyText from '../copy.json';
import freeSpaceImage from '../assets/justin.png';

interface Row {
  text: string;
  defaultSelected: boolean;
  locked: boolean;
  image: string | null;
}

function useBingoBoard() {
  const [shuffledOptions, setShuffledOptions] = React.useState<string[]>([]);

  React.useEffect(() => {
    setShuffledOptions(arrayfriend(...options).shuffle());
  }, []);

  const rows = arrayfriend(...shuffledOptions)
    .batch(5)
    .slice(0, 5)
    .map(
      (row) =>
        row.map((text) => ({ text, defaultSelected: false, locked: false, image: null })) as Row[]
    );

  if (rows.length) {
    rows[2][2] = {
      text: copyText.freeSpace,
      defaultSelected: true,
      locked: true,
      image: freeSpaceImage,
    };
  }

  return {
    rows,
  };
}

export default useBingoBoard;
