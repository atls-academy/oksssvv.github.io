export const getColorLineBackground = (currentElementIndexInViewport) =>
  currentElementIndexInViewport === 2 || currentElementIndexInViewport === 0
    ? 'background.darkPrimary'
    : 'background.lightPrimary'
