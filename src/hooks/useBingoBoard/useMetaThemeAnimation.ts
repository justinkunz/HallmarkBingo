import React from "react";
import theme from "../../theme.json";
import { changeMetaThemeColor } from "../../utils";

function useMetaThemeAnimation(hasBingo: boolean) {
  const [metaAnimationInterval, setMetaAnimationInterval] =
    React.useState<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (hasBingo && !metaAnimationInterval) {
      const colors = [theme.palette.secondary_accent, theme.palette.accent];
      let colorIndex = 0;

      const interval = setInterval(() => {
        changeMetaThemeColor(colors[colorIndex]);
        colorIndex++;
        if (colorIndex === colors.length) colorIndex = 0;
      }, 250);
      setMetaAnimationInterval(interval);
    }
    if (!hasBingo && metaAnimationInterval) {
      clearInterval(metaAnimationInterval);
      setMetaAnimationInterval(null);
      changeMetaThemeColor(theme.palette.accent);
    }
  }, [hasBingo, metaAnimationInterval]);
}

export default useMetaThemeAnimation;
