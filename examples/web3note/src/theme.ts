export const getSystemTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    // 系统主题设置为深色模式
    return "dark";
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    // 系统主题设置为浅色模式
    return "light";
  } else {
    // 系统主题未明确设置，或浏览器不支持prefers-color-scheme
    return "no-preference";
  }
};
