type Theme = "light" | "dark"

let _theme: Theme = "light"

export function getTheme(): Theme {
  return _theme
}
export function setTheme(t: Theme) {
  _theme = t
}
