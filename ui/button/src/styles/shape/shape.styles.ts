import { styleFn }             from 'styled-system'
import { switchProp }          from 'styled-tools'
import { prop }                from 'styled-tools'

import { getNormalSizeStyles } from './abstract'
import { getBigSizeStyles }    from './abstract'
import { getWideSizeStyles }   from './abstract'
import { getMediumSizeStyles } from './abstract'

const getShapeStyles = (theme): styleFn => {
  const normalSizeStyles = getNormalSizeStyles(theme)
  const bigSizeStyles = getBigSizeStyles(theme)
  const wideSizeStyles = getWideSizeStyles(theme)
  const mediumSizeStyles = getMediumSizeStyles(theme)

  return switchProp(prop('size', 'normal'), {
    normal: normalSizeStyles,
    big: bigSizeStyles,
    wide: wideSizeStyles,
    medium: mediumSizeStyles,
  })
}

export { getShapeStyles }
