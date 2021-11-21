import React from 'react';
import arrayfriend from 'arrayfriend';
import options from '../../data/options.json';
import copyText from '../../copy.json';
import freeSpaceImage from '../../assets/justin.png';

export interface RowItem {
  text: string;
  defaultSelected: boolean;
  locked: boolean;
  image: string | null;
}

function useShuffledOptions() {
  const shuffledOptions = React.useMemo(
    () =>
      arrayfriend(...arrayfriend(...options).shuffle())
        .batch(5)
        .slice(0, 5)
        .map(
          (row, rowIndex) =>
            row.map((text, itemIndex) => {
              return rowIndex === 2 && itemIndex === 2
                ? {
                    text: copyText.freeSpace,
                    defaultSelected: true,
                    locked: true,
                    image: freeSpaceImage,
                  }
                : {
                    text,
                    defaultSelected: false,
                    locked: false,
                    image: null,
                    selected: false,
                  };
            }) as RowItem[]
        ),
    []
  );

  return { shuffledOptions };
}

export default useShuffledOptions;
