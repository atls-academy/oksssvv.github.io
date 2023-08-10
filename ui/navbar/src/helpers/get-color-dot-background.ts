export const getColorDotBackground = (currentElementIndexInViewport) =>
  currentElementIndexInViewport === 0 || currentElementIndexInViewport === 2
    ? 'background.brightLilac'
    : 'background.white'
