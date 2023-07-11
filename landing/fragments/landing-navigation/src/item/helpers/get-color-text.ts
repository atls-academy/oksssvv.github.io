export const getColorText = (backColor, hover) => {
  if (backColor === 'light') return hover ? 'text.black' : 'text.gray'
  return hover ? 'text.white' : 'text.ghost'
}
