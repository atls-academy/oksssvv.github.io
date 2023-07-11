export const getColorBorder = (backColor, hover) => {
  if (backColor === 'light') return hover ? 'black' : 'gray'
  return hover ? 'white' : 'ghost'
}
