export const getColor = (currentElementIndexInViewport, element) => {
  if (
    currentElementIndexInViewport === element.index &&
    (currentElementIndexInViewport === 0 || currentElementIndexInViewport === 2)
  ) {
    return 'text.purple'
  }
  if (
    (currentElementIndexInViewport === 0 || currentElementIndexInViewport === 2) &&
    currentElementIndexInViewport !== element.index
  ) {
    return 'text.darkPurple'
  }
  if (
    currentElementIndexInViewport === element.index &&
    currentElementIndexInViewport !== 0 &&
    currentElementIndexInViewport !== 2
  ) {
    return 'text.white'
  }
  return 'text.lightWhite'
}
