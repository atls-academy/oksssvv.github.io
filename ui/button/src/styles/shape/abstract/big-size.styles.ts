import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getBigSizeStyles = (theme): styleFn => {
  const bigSizeStyles: styleFn = createShapeStyles({
    size: 96,
    paddingRight: 32,
    paddingLeft: 32,
    fontSize: theme.fontSizes.big,
    rounding: theme.radii.big,
    fontWeight: theme.fontWeights.normal,
    fontFamily: theme.fonts.primary,
  })
  return bigSizeStyles
}

export { getBigSizeStyles }
