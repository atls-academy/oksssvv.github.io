import { createShapeStyles } from '@atls-ui-parts/button'

import { prop }              from 'styled-tools'
import { switchProp }        from 'styled-tools'

const shapeNormalSizeNormalPaddingStyles = createShapeStyles({
  size: 64,
  paddingLeft: 24,
  paddingRight: 8,
})

const shapeBigSizeNormalPaddingStyles = createShapeStyles({
  size: 72,
  paddingLeft: 24,
  paddingRight: 12,
})

const shapeSmallSizeStyles = createShapeStyles({
  size: 64,
  paddingLeft: 16,
  paddingRight: 16,
})

const shapeSmallSizeSmallPaddingStyles = createShapeStyles({
  size: 56,
  paddingLeft: 18,
  paddingRight: 18,
})

const shapeSmallSizeBigPaddingStyles = createShapeStyles({
  size: 44,
  paddingLeft: 43,
  paddingRight: 43,
})

export const shapeStyles = switchProp(prop('size'), {
  normalSizeNormalPadding: shapeNormalSizeNormalPaddingStyles,
  bigSizeNormalPadding: shapeBigSizeNormalPaddingStyles,
  smallSize: shapeSmallSizeStyles,
  smallSizeSmallPadding: shapeSmallSizeSmallPaddingStyles,
  smallSizeBigPadding: shapeSmallSizeBigPaddingStyles,
})
