import React from 'react';
import useShuffledOptions, { RowItem } from './useShuffledOptions';
import useBoardRows from './useBoardRows';

interface RowItemWithSelect extends RowItem {
  onClick: () => void;
  selected: boolean;
}

type Rows = Array<RowItemWithSelect[]>;

function useBingoBoard() {
  const { shuffledOptions } = useShuffledOptions();
  const { rows } = useBoardRows({ shuffledOptions });

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
    rows,
    hasBingo,
  };
}

export default useBingoBoard;
