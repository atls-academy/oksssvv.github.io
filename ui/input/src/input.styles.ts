import { createBaseStyles }       from '@atls-ui-parts/input'
import { createShapeStyles }      from '@atls-ui-parts/input'
import { createAppearanceStyles } from '@atls-ui-parts/input'

import { styleFn }                from 'styled-system'
import { prop }                   from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { ifProp }                 from 'styled-tools'

const standardSizeStyles = createShapeStyles({
  fontFamily: 'Helvetica',
  fontWeight: 400,
  size: 62,
  fontSize: 18,
  rounding: 24,
  paddingLeft: 24,
  paddingRight: 12,
})

const normalSizeStyles = createShapeStyles({
  fontFamily: 'Helvetica',
  fontWeight: 400,
  size: 56,
  fontSize: 16,
  rounding: 16,
  paddingLeft: 12,
  paddingRight: 4,
})

export const ordinaryDefaultStyles = createAppearanceStyles({
  borderColor: prop('theme.colors.input.ordinary.default.border'),
  fontColor: prop('theme.colors.input.ordinary.default.font'),
  backgroundColor: prop('theme.colors.input.ordinary.default.background'),
})

export const ordinaryHoverStyles = createAppearanceStyles({
  borderColor: prop('theme.colors.input.ordinary.hover.border'),
  fontColor: prop('theme.colors.input.ordinary.hover.font'),
  backgroundColor: prop('theme.colors.input.ordinary.hover.background'),
})

export const ordinaryFocusStyles = createAppearanceStyles({
  borderColor: prop('theme.colors.input.ordinary.focus.border'),
  fontColor: prop('theme.colors.input.ordinary.focus.font'),
  backgroundColor: prop('theme.colors.input.ordinary.focus.background'),
})

export const ordinaryFilledStyles = createAppearanceStyles({
  borderColor: prop('theme.colors.input.ordinary.filled.border'),
  fontColor: prop('theme.colors.input.ordinary.filled.font'),
  backgroundColor: prop('theme.colors.input.ordinary.filled.background'),
})

export const textareaStyles: styleFn = ifProp(prop('textarea', false), {
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 16,
  paddingBottom: 16,
  minHeight: 148,
})

export const appearanceStyles = switchProp(prop('variant', 'ordinary'), {
  ordinary: ifProp(
    prop('filled', false),
    ordinaryFilledStyles,
    ifProp(
      prop('focus', false),
      ordinaryFocusStyles,
      ifProp(prop('hover', false), ordinaryHoverStyles, ordinaryDefaultStyles)
    )
  ),
})

export const baseStyles = createBaseStyles()

export const shapeStyles = switchProp(prop('size', 'standard'), {
  standard: standardSizeStyles,
  normal: normalSizeStyles,
})
