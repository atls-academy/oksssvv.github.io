import { createShapeStyles } from '@atls-ui-parts/button'

import { prop }              from 'styled-tools'
import { switchProp }        from 'styled-tools'

const bigSizeNormalRadiiStyles = createShapeStyles({
  size: 86,
  paddingLeft: 24,
  paddingRight: 24,
  rounding: prop('theme.radii.medium') as unknown as number,
})

const largeSizeNormalPaddingStyles = createShapeStyles({
  size: 108,
  paddingLeft: 36,
  paddingRight: 18,
  rounding: prop('theme.radii.mega') as unknown as number,
})

const bigSizeBigPaddingStyles = createShapeStyles({
  size: 84,
  paddingLeft: 30,
  paddingRight: 12,
  rounding: prop('theme.radii.big') as unknown as number,
})

const bigSizeBigRadiiStyles = createShapeStyles({
  size: 84,
  paddingLeft: 27.5,
  paddingRight: 27.5,
  rounding: prop('theme.radii.big') as unknown as number,
})

const normalSizeNormalPaddingStyles = createShapeStyles({
  size: 64,
  paddingLeft: 24,
  paddingRight: 8,
  rounding: prop('theme.radii.medium') as unknown as number,
})

const normalSizeSmallPaddingStyles = createShapeStyles({
  size: 40,
  paddingLeft: 12,
  paddingRight: 6,
  rounding: prop('theme.radii.normal') as unknown as number,
})

const bigSizeNormalPaddingStyles = createShapeStyles({
  size: 72,
  paddingLeft: 24,
  paddingRight: 12,
  rounding: prop('theme.radii.big') as unknown as number,
})

const smallSizeStyles = createShapeStyles({
  size: 64,
  paddingLeft: 16,
  paddingRight: 16,
  rounding: prop('theme.radii.normal') as unknown as number,
})

const smallSizeSmallPaddingStyles = createShapeStyles({
  size: 56,
  paddingLeft: 18,
  paddingRight: 18,
  rounding: prop('theme.radii.medium') as unknown as number,
})

const smallSizeBigPaddingStyles = createShapeStyles({
  size: 44,
  paddingLeft: 43,
  paddingRight: 43,
  rounding: prop('theme.radii.normal') as unknown as number,
})

const smallSizeNormalPaddingStyles = createShapeStyles({
  size: 56,
  paddingLeft: 16,
  paddingRight: 12,
  rounding: prop('theme.radii.medium') as unknown as number,
})

const smallSizeSamePaddingStyles = createShapeStyles({
  size: 48,
  paddingLeft: 24,
  paddingRight: 24,
  rounding: prop('theme.radii.regular') as unknown as number,
})

export const shapeStyles = switchProp(prop('size'), {
  normalSizeNormalPadding: normalSizeNormalPaddingStyles,
  bigSizeNormalPadding: bigSizeNormalPaddingStyles,
  smallSize: smallSizeStyles,
  smallSizeSmallPadding: smallSizeSmallPaddingStyles,
  smallSizeBigPadding: smallSizeBigPaddingStyles,
  normalSizeSmallPadding: normalSizeSmallPaddingStyles,
  smallSizeNormalPadding: smallSizeNormalPaddingStyles,
  smallSizeSamePadding: smallSizeSamePaddingStyles,
  bigSizeBigPadding: bigSizeBigPaddingStyles,
  largeSizeNormalPadding: largeSizeNormalPaddingStyles,
  bigSizeBigRadii: bigSizeBigRadiiStyles,
  bigSizeNormalRadii: bigSizeNormalRadiiStyles,
})
