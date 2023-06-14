import { createBaseStyles }       from '@atls-ui-parts/button'
import { createShapeStyles }      from '@atls-ui-parts/button'
import { createAppearanceStyles } from '@atls-ui-parts/button'
import { createContentStyles }    from '@atls-ui-parts/button'

import { prop }                   from 'styled-tools'
import { switchProp }             from 'styled-tools'

export const baseStyles = createBaseStyles()
export const contentStyles = createContentStyles()

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

const appearancePrimaryStyles = createAppearanceStyles({
  fontColor: 'black',
  backgroundColor: 'rgba(0, 0, 0, 0)',
})

export const shapeStyles = switchProp(prop('size'), {
  normalSizeNormalPadding: shapeNormalSizeNormalPaddingStyles,
  bigSizeNormalPadding: shapeBigSizeNormalPaddingStyles,
})

export const variantStyles = switchProp(prop('variant', 'primary'), {
  primary: appearancePrimaryStyles,
})
