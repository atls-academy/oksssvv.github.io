import { createAppearanceStyles } from '@atls-ui-parts/button'

import { styleFn }                from 'styled-system'

const getBorderColorsStyles = (theme): styleFn => {
  const borderDefaultColors = createAppearanceStyles({
    fontColor: theme.colors.button.border.fontColor,
    backgroundColor: theme.colors.button.border.backgroundColor,
    borderColor: theme.colors.button.border.borderColor,
  })
  return () => ({
    ...borderDefaultColors(),
  })
}

export { getBorderColorsStyles }
