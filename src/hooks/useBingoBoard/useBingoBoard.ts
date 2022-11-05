import React from "react";
import copy from "../../copy.json";
import theme from "../../theme.json";
import { BINGO_BOARD_SESSION_KEY } from "../../constants";
import useShuffledOptions, { RowItem } from "./useShuffledOptions";
import useBoardRows from "./useBoardRows";

interface RowItemWithSelect extends RowItem {
  onClick: () => void;
  selected: boolean;
}

type Rows = Array<RowItemWithSelect[]>;

function useBingoBoard() {
  const { shuffledOptions } = useShuffledOptions();
  const { rows, isBoardEmpty } = useBoardRows({ shuffledOptions });
  const [hasClickedOnce, setHasClickedOnce] = React.useState(false);

  const clearBoard = React.useCallback(() => {
    window.sessionStorage.removeItem(BINGO_BOARD_SESSION_KEY);
    window.location.reload();
  }, []);

  const handleClearBoardClick = React.useCallback(() => {
    if (isBoardEmpty || hasClickedOnce) return clearBoard();
    setHasClickedOnce(true);
  }, [isBoardEmpty, hasClickedOnce, clearBoard]);

  const hasBingo = React.useMemo(() => {
    const checkRows = (rows: Rows) =>
      rows.some((row) => row.every((item) => item.selected));
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

  React.useEffect(() => {
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute(
        "content",
        hasBingo ? theme.palette.secondary_accent : theme.palette.accent
      );
    }
  }, [hasBingo]);

  return {
    rows,
    hasBingo,
    onClearBoardClick: handleClearBoardClick,
    clearBoardCopy:
      hasClickedOnce && !isBoardEmpty
        ? copy.clearBoardButton.confirm
        : copy.clearBoardButton.static,
    isBoardEmpty,
  };
}

export default useBingoBoard;
