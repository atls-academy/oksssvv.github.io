import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getMediumSizeStyles = (theme): styleFn => {
  const mediumSizeStyles: styleFn = createShapeStyles({
    size: 48,
    paddingRight: 30,
    paddingLeft: 30,
    rounding: theme.radii.normal,
  })
  return mediumSizeStyles
}

export { getMediumSizeStyles }
