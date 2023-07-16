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

export const textareaStyles: styleFn = ifProp(prop('textarea', false), {
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 16,
  paddingBottom: 16,
  minHeight: 148,
})

export const baseStyles = createBaseStyles()
export const appearanceStyles = createAppearanceStyles({
  fontColor: 'black',
  backgroundColor: 'white',
  borderColor: '#DADEED',
})

export const shapeStyles = switchProp(prop('size', 'standard'), {
  standard: standardSizeStyles,
  normal: normalSizeStyles,
})
