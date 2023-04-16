import { createShapeStyles } from "@atls-ui-parts/button"

import { prop }                from 'styled-tools'
import { switchProp }          from 'styled-tools'

const iconPaddingRounding = createShapeStyles({
  size: 56,
  paddingRight: 19,
  paddingLeft: 19,
  rounding: 16,
})

const formPaddingRounding = createShapeStyles({
  size: 96,
  paddingRight: 32,
  paddingLeft: 32,
  rounding: 24,
})

const formBorder = createShapeStyles({
  size: 48,
  paddingRight: 30,
  paddingLeft: 30,
  rounding: 12,
})

export const shapeStyles = switchProp(prop('shape','normal'), {
  iconPaddingRounding: iconPaddingRounding,
  formPaddingRounding: formPaddingRounding,
  formBorder: formBorder
})