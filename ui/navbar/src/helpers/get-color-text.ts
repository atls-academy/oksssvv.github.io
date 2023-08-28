export const getColorText = (selected, index) => {
  if (selected === index && (selected === 1 || selected === 3)) {
    return 'text.purple'
  }
  if ((selected === 1 || selected === 3) && selected !== index) {
    return 'text.darkPurple'
  }
  if (selected === index && selected !== 1 && selected !== 3) {
    return 'text.white'
  }
  return 'text.lightWhite'
}
