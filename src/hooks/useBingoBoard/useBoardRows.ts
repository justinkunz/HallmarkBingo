import React from 'react';
import { RowItem } from './useShuffledOptions';

interface UseBoardRows {
  shuffledOptions: Array<RowItem[]>;
}
interface SelectedState {
  [key: string]: boolean;
}

function useBoardRows({ shuffledOptions }: UseBoardRows) {
  const [selected, setSelected] = React.useState<SelectedState>({});

  React.useEffect(() => {
    const defaultSelected = shuffledOptions.flat().reduce((acc, item) => {
      acc[item.text] = item.defaultSelected;
      return acc;
    }, {} as SelectedState);
    setSelected(defaultSelected);
  }, [shuffledOptions]);

  const handleClick = ({ locked, text }: RowItem) => {
    if (locked) return;
    setSelected({ ...selected, [text]: !selected[text] });
  };

  const rows = shuffledOptions.map((row) =>
    row.map((item) => ({
      ...item,
      onClick: () => handleClick(item),
      selected: selected[item.text],
    }))
  );

  return {
    rows,
  };
}

export default useBoardRows;
