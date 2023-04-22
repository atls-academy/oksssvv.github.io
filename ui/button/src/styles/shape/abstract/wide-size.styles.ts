import { createShapeStyles } from '@atls-ui-parts/button'

import { styleFn }           from 'styled-system'

const getWideSizeStyles = (theme): styleFn => {
  const wideSizeStyles: styleFn = createShapeStyles({
    size: 44,
    paddingRight: 42,
    paddingLeft: 42,
    rounding: theme.radii.normal,
  })
  return wideSizeStyles
}

export { getWideSizeStyles }
