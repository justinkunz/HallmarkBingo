export const changeMetaThemeColor = (color: string) => {
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (!metaTheme) return;
  metaTheme.setAttribute("content", color);
};
