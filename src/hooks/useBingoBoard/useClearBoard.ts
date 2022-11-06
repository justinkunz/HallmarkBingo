import React from "react";
import copy from "../../copy.json";
import { BINGO_BOARD_SESSION_KEY } from "../../constants";

function useClearBoard(isBoardEmpty: boolean) {
  const [hasClickedOnce, setHasClickedOnce] = React.useState(false);

  const clearBoard = React.useCallback(() => {
    window.sessionStorage.removeItem(BINGO_BOARD_SESSION_KEY);
    window.location.reload();
  }, []);

  const handleClearBoardClick = React.useCallback(() => {
    if (isBoardEmpty || hasClickedOnce) return clearBoard();
    setHasClickedOnce(true);
  }, [isBoardEmpty, hasClickedOnce, clearBoard]);

  return {
    onClearBoardClick: handleClearBoardClick,
    clearBoardCopy:
      hasClickedOnce && !isBoardEmpty
        ? copy.clearBoardButton.confirm
        : copy.clearBoardButton.static,
  };
}

export default useClearBoard;
