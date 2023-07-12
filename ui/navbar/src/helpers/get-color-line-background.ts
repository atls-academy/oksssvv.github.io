export const getColorLineBackground = (currentElementIndexInViewport) =>
  currentElementIndexInViewport === 1 || currentElementIndexInViewport === 5
    ? 'background.darkPrimary'
    : 'background.lightPrimary'
