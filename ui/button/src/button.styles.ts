import { createBaseStyles }       from '@atls-ui-parts/button'
import { createShapeStyles }      from '@atls-ui-parts/button'
import { createAppearanceStyles } from '@atls-ui-parts/button'
import { createContentStyles }    from '@atls-ui-parts/button'

import { prop }                   from 'styled-tools'
import { switchProp }             from 'styled-tools'

const shapeDefaultStyle = createShapeStyles({
  size: 50,
  paddingRight: 15,
  paddingLeft: 15,
  rounding: 10,
})

const shapeSocialIconNormal = createShapeStyles({
  size: 56,
  paddingRight: 19,
  paddingLeft: 19,
  rounding: 16,
})

const shapeSocialIconWide = createShapeStyles({
  size: 44,
  paddingRight: 42,
  paddingLeft: 42,
  rounding: 12,
})

const shapeFormBig = createShapeStyles({
  size: 96,
  paddingRight: 32,
  paddingLeft: 32,
  rounding: 24,
})

const shapeFormNormal = createShapeStyles({
  size: 48,
  paddingRight: 30,
  paddingLeft: 30,
  rounding: 12,
})

const appearanceDefaultStyles = createAppearanceStyles({
  fontColor: 'black',
  backgroundColor: 'white',
})

const appearenceIconTransparent = createAppearanceStyles({
  fontColor: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  borderColor: '0',
})

const appearanceLineBorder = createAppearanceStyles({
  fontColor: '0',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  borderColor: 'rgba(255, 255, 255, 0.25)',
})

export const baseStyles = createBaseStyles()
export const contentStyles = createContentStyles()

export const shapeStyles = switchProp(prop('size', 'default'), {
  default: shapeDefaultStyle,

  iconNormal: shapeSocialIconNormal,
  iconWide: shapeSocialIconWide,
  formBig: shapeFormBig,
  formNormal: shapeFormNormal,
})

export const appearanceStyles = switchProp(prop('variant', 'default'), {
  default: appearanceDefaultStyles,

  iconTransparent: appearenceIconTransparent,
  iconBorder: appearanceLineBorder,
})
