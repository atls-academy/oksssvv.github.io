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

const appearanceDarkPurpleBackgroundDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkPurpleBackground.default.font'),
  backgroundColor: prop('theme.colors.button.darkPurpleBackground.default.background'),
  borderColor: prop('theme.colors.button.darkPurpleBackground.default.border'),
})

const appearanceDarkPurpleBackgroundHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkPurpleBackground.hover.font'),
  backgroundColor: prop('theme.colors.button.darkPurpleBackground.hover.background'),
  borderColor: prop('theme.colors.button.darkPurpleBackground.hover.border'),
})

const appearanceDarkPurpleBackgroundPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkPurpleBackground.pressed.font'),
  backgroundColor: prop('theme.colors.button.darkPurpleBackground.pressed.background'),
  borderColor: prop('theme.colors.button.darkPurpleBackground.pressed.border'),
})

const appearanceDarkPurpleBackgroundDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.darkPurpleBackground.disabled.font'),
  backgroundColor: prop('theme.colors.button.darkPurpleBackground.disabled.background'),
  borderColor: prop('theme.colors.button.darkPurpleBackground.disabled.border'),
})

const appearanceTransparentLightBackgroundDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentLightBackground.default.font'),
  backgroundColor: prop('theme.colors.button.transparentLightBackground.default.background'),
  borderColor: prop('theme.colors.button.transparentLightBackground.default.border'),
})

const appearanceTransparentLightBackgroundPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentLightBackground.pressed.font'),
  backgroundColor: prop('theme.colors.button.transparentLightBackground.pressed.background'),
  borderColor: prop('theme.colors.button.transparentLightBackground.pressed.border'),
})

const appearanceTransparentLightBackgroundDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.transparentLightBackground.disabled.font'),
  backgroundColor: prop('theme.colors.button.transparentLightBackground.disabled.background'),
  borderColor: prop('theme.colors.button.transparentLightBackground.disabled.border'),
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
  darkPurpleBackground: ifProp(
    prop('disabled', false),
    appearanceDarkPurpleBackgroundDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceDarkPurpleBackgroundPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceDarkPurpleBackgroundHoverStyles,
        appearanceDarkPurpleBackgroundDefaultStyles
      )
    )
  ),
  transparentLightBackground: ifProp(
    prop('disabled', false),
    appearanceTransparentLightBackgroundDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceTransparentLightBackgroundPressedStyles,
      ifProp(
        prop('hover', false),
        appearanceTransparentLightBackgroundDefaultStyles,
        appearanceTransparentLightBackgroundDefaultStyles
      )
    )
  ),
})

export { appearanceStyles }
