import React from "react";
import { RowItem } from "./useShuffledOptions";
import { BINGO_BOARD_SESSION_KEY } from "../../constants";

interface UseBoardRows {
  shuffledOptions: Array<RowItem[]>;
}
interface SelectedState {
  [key: string]: boolean;
}

function useBoardRows({ shuffledOptions }: UseBoardRows) {
  const [selected, setSelected] = React.useState<SelectedState>({});
  const [isBoardEmpty, setIsBoardEmpty] = React.useState(false);

  React.useEffect(() => {
    const defaultSelected = shuffledOptions.flat().reduce((acc, item) => {
      acc[item.text] = Boolean(item.defaultSelected || item.selected);
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

  React.useEffect(() => {
    setIsBoardEmpty(
      !rows.some((row) =>
        row.some((square) => square.selected && !square.locked)
      )
    );
    window.sessionStorage.setItem(
      BINGO_BOARD_SESSION_KEY,
      JSON.stringify(rows)
    );
  }, [rows]);

  return {
    isBoardEmpty,
    rows,
  };
}

export default useBoardRows;
