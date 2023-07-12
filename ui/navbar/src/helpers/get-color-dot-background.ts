export const getColorDotBackground = (currentElementIndexInViewport) =>
  currentElementIndexInViewport === 1 || currentElementIndexInViewport === 5
    ? 'background.brightLilac'
    : 'background.white'
