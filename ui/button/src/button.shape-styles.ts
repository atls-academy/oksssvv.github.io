import { createShapeStyles } from '@atls-ui-parts/button'

import { prop }              from 'styled-tools'
import { switchProp }        from 'styled-tools'

const shapeNormalSizeNormalPaddingStyles = createShapeStyles({
  size: 64,
  paddingLeft: 24,
  paddingRight: 8,
  rounding: prop('theme.radii.medium') as unknown as number,
})

const shapeNormalSizeSmallPaddingStyles = createShapeStyles({
  size: 40,
  paddingLeft: 12,
  paddingRight: 6,
  rounding: prop('theme.radii.normal') as unknown as number,
})

const shapeBigSizeNormalPaddingStyles = createShapeStyles({
  size: 72,
  paddingLeft: 24,
  paddingRight: 12,
  rounding: prop('theme.radii.big') as unknown as number,
})

const shapeSmallSizeStyles = createShapeStyles({
  size: 64,
  paddingLeft: 16,
  paddingRight: 16,
  rounding: prop('theme.radii.normal') as unknown as number,
})

const shapeSmallSizeSmallPaddingStyles = createShapeStyles({
  size: 56,
  paddingLeft: 18,
  paddingRight: 18,
  rounding: prop('theme.radii.medium') as unknown as number,
})

const shapeSmallSizeBigPaddingStyles = createShapeStyles({
  size: 44,
  paddingLeft: 43,
  paddingRight: 43,
  rounding: prop('theme.radii.normal') as unknown as number,
})

export const shapeStyles = switchProp(prop('size'), {
  normalSizeNormalPadding: shapeNormalSizeNormalPaddingStyles,
  bigSizeNormalPadding: shapeBigSizeNormalPaddingStyles,
  smallSize: shapeSmallSizeStyles,
  smallSizeSmallPadding: shapeSmallSizeSmallPaddingStyles,
  smallSizeBigPadding: shapeSmallSizeBigPaddingStyles,
  normalSizeSmallPaddingStyles: shapeNormalSizeSmallPaddingStyles,
})
