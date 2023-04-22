import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getNormalSizeStyles = (theme): styleFn => {
  const normalSizeStyles: styleFn = createShapeStyles({
    size: 56,
    paddingRight: 19,
    paddingLeft: 19,
    rounding: theme.radii.medium,
  })
  return normalSizeStyles
}

export { getNormalSizeStyles }
