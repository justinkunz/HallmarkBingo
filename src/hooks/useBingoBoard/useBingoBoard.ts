import useShuffledOptions from "./useShuffledOptions";
import useBoardRows from "./useBoardRows";
import useMetaThemeAnimation from "./useMetaThemeAnimation";
import useBingoStatus from "./useBingoStatus";
import useClearBoard from "./useClearBoard";

function useBingoBoard() {
  const { shuffledOptions } = useShuffledOptions();
  const { rows, isBoardEmpty } = useBoardRows({ shuffledOptions });
  const { onClearBoardClick, clearBoardCopy } = useClearBoard(isBoardEmpty);
  const { hasBingo } = useBingoStatus(rows);
  useMetaThemeAnimation(hasBingo);

  return {
    rows,
    hasBingo,
    onClearBoardClick,
    clearBoardCopy,
    isBoardEmpty,
  };
}

export default useBingoBoard;
