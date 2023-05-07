import { createAppearanceStyles } from '@atls-ui-parts/button'

import { ifProp }                 from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

const appearanceTransparentBackgroundDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackground.default.font'),
  backgroundColor: prop('theme.colors.button.transparentBackground.default.background'),
  borderColor: prop('theme.colors.button.transparentBackground.default.border'),
})

const appearanceTransparentBackgroundHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackground.hover.font'),
  backgroundColor: prop('theme.colors.button.transparentBackground.hover.background'),
  borderColor: prop('theme.colors.button.transparentBackground.hover.border'),
})

const appearanceTransparentBackgroundPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackground.pressed.font'),
  backgroundColor: prop('theme.colors.button.transparentBackground.pressed.background'),
  borderColor: prop('theme.colors.button.transparentBackground.pressed.border'),
})

const appearanceTransparentBackgroundDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBackground.disabled.font'),
  backgroundColor: prop('theme.colors.button.transparentBackground.disabled.background'),
  borderColor: prop('theme.colors.button.transparentBackground.disabled.border'),
})

const appearanceTransparentBorderDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBorder.default.font'),
  backgroundColor: prop('theme.colors.button.transparentBorder.default.background'),
  borderColor: prop('theme.colors.button.transparentBorder.default.border'),
})

const appearanceTransparentBorderHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBorder.hover.font'),
  backgroundColor: prop('theme.colors.button.transparentBorder.hover.background'),
  borderColor: prop('theme.colors.button.transparentBorder.hover.border'),
})

const appearanceTransparentBorderPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBorder.pressed.font'),
  backgroundColor: prop('theme.colors.button.transparentBorder.pressed.background'),
  borderColor: prop('theme.colors.button.transparentBorder.pressed.border'),
})

const appearanceTransparentBorderDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentBorder.disabled.font'),
  backgroundColor: prop('theme.colors.button.transparentBorder.disabled.background'),
  borderColor: prop('theme.colors.button.transparentBorder.disabled.border'),
})

const appearanceStyles = switchProp(prop('variant', 'primary'), {
  transparentBackground: ifProp(
    prop('disabled', false),
    appearanceTransparentBackgroundDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceTransparentBackgroundPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceTransparentBackgroundHoverStyles,
        appearanceTransparentBackgroundDefaultStyles
      )
    )
  ),
  transparentBorder: ifProp(
    prop('disabled', false),
    appearanceTransparentBorderDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceTransparentBorderPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceTransparentBorderHoverStyles,
        appearanceTransparentBorderDefaultStyles
      )
    )
  ),
})

export { appearanceStyles }
