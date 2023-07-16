export const getColor = (currentElementIndexInViewport, element) => {
  if (
    currentElementIndexInViewport === element.index &&
    (currentElementIndexInViewport === 1 || currentElementIndexInViewport === 5)
  ) {
    return 'text.purple'
  }
  if (
    (currentElementIndexInViewport === 1 || currentElementIndexInViewport === 5) &&
    currentElementIndexInViewport !== element.index
  ) {
    return 'text.darkPurple'
  }
  if (
    currentElementIndexInViewport === element.index &&
    currentElementIndexInViewport !== 1 &&
    currentElementIndexInViewport !== 5
  ) {
    return 'text.white'
  }
  return 'text.lightWhite'
}
