import { createShapeStyles }   from '@atls-ui-parts/button'
import { createContentStyles } from '@atls-ui-parts/button'

import { styleFn }             from 'styled-system'
import { prop }                from 'styled-tools'
import { switchProp }          from 'styled-tools'
import { ifProp }              from 'styled-tools'

import { getBaseStyles }       from './styles'

export const fillStyles: styleFn = ifProp(prop('fill', false), { width: '100%' })

const mediumPaddingBigHeightStyles = createShapeStyles({
  size: 96,
  paddingRight: 32,
  paddingLeft: 32,
  rounding: prop('theme.radii.big') as unknown as number,
})

const bigPaddingMediumHeightStyles = createShapeStyles({
  size: 48,
  paddingRight: 30,
  paddingLeft: 30,
  rounding: prop('theme.radii.normal') as unknown as number,
})

const normalPaddingNormalHeightStyles = createShapeStyles({
  size: 56,
  paddingRight: 19,
  paddingLeft: 19,
  rounding: prop('theme.radii.medium') as unknown as number,
})

const bigPaddingSmallHeightStyles = createShapeStyles({
  size: 44,
  paddingRight: 42,
  paddingLeft: 42,
  rounding: prop('theme.radii.normal') as unknown as number,
})

const normalPaddingSmallHeightStyles = createShapeStyles({
  size: 52,
  paddingRight: 17,
  paddingLeft: 19,
  rounding: prop('theme.radii.normal') as unknown as number,
})

const smallPaddingSmallHeightStyles = createShapeStyles({
  size: 36,
  paddingRight: 11.3,
  paddingLeft: 12.7,
  rounding: prop('theme.radii.small') as unknown as number,
})

export const baseStyles = getBaseStyles()
export const contentStyles = createContentStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  mediumPaddingBigHeight: mediumPaddingBigHeightStyles,
  bigPaddingMediumHeight: bigPaddingMediumHeightStyles,
  normalPaddingNormalHeight: normalPaddingNormalHeightStyles,
  bigPaddingSmallHeight: bigPaddingSmallHeightStyles,
  normalPaddingSmallHeight: normalPaddingSmallHeightStyles,
  smallPaddingSmallHeight: smallPaddingSmallHeightStyles,
})
