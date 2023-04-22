import { styleFn }                    from 'styled-system'
import { switchProp }                 from 'styled-tools'
import { prop }                       from 'styled-tools'

import { getTransparentColorsStyles } from './abstract'
import { getBorderColorsStyles }      from './abstract'

const getAppearanceStyles = (theme): styleFn => {
  const borderColorsStyles = getBorderColorsStyles(theme)
  const transparentColorsStyles = getTransparentColorsStyles(theme)
  return switchProp(prop('colors', 'border'), {
    transparent: transparentColorsStyles,
    border: borderColorsStyles,
  })
}

export { getAppearanceStyles }
