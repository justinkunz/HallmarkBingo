import React from 'react';
import useShuffledOptions, { RowItem } from './useShuffledOptions';

interface SelectedState {
  [key: string]: boolean;
}

interface RowItemWithSelect extends RowItem {
  onClick: () => void;
  selected: boolean;
}

type Rows = Array<RowItemWithSelect[]>;

function useBingoBoard() {
  const [selected, setSelected] = React.useState<SelectedState>({});
  const { shuffledOptions } = useShuffledOptions();

  React.useEffect(() => {
    const defaultSelected = shuffledOptions.flat().reduce((acc, item) => {
      acc[item.text] = item.defaultSelected;
      return acc;
    }, {} as SelectedState);
    setSelected(defaultSelected);
  }, [shuffledOptions]);

  const handleClick = (id: string) => {
    setSelected({ ...selected, [id]: !selected[id] });
  };

  const rows = shuffledOptions.map((row) =>
    row.map((item) => ({
      ...item,
      onClick: () => handleClick(item.text),
      selected: selected[item.text],
    }))
  );

  const hasBingo = React.useMemo(() => {
    const checkRows = (rows: Rows) => rows.some((row) => row.every((item) => item.selected));
    if (checkRows(rows)) return true;

    const verticalRows = rows.reduce((acc, curr, i) => {
      curr.forEach((item, j) => {
        if (!acc[j]) acc[j] = [];
        acc[j].push(item);
      });
      return acc;
    }, [] as Rows);

    if (checkRows(verticalRows)) return true;

    const diagonalLeft = [];
    const diagonalRight = [];

    for (let i = 0; i < rows.length; i++) {
      const j = rows.length - 1 - i;
      diagonalLeft.push(rows[i][i]);
      diagonalRight.push(rows[i][j]);
    }

    if (checkRows([diagonalLeft, diagonalRight])) return true;
    return false;
  }, [rows]);

  return {
    hasBingo,
    rows,
  };
}

export default useBingoBoard;
