import { createAppearanceStyles } from '@atls-ui-parts/button'

import { ifProp }                 from 'styled-tools'
import { switchProp }             from 'styled-tools'
import { prop }                   from 'styled-tools'

const appearancePrimaryDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.default.font'),
  backgroundColor: prop('theme.colors.button.primary.default.background'),
  borderColor: prop('theme.colors.button.primary.default.border'),
})

const appearancePrimaryHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.hover.font'),
  backgroundColor: prop('theme.colors.button.primary.hover.background'),
  borderColor: prop('theme.colors.button.primary.hover.border'),
})

const appearancePrimaryPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.pressed.font'),
  backgroundColor: prop('theme.colors.button.primary.pressed.background'),
  borderColor: prop('theme.colors.button.primary.pressed.border'),
})

const appearancePrimaryDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.primary.disabled.font'),
  backgroundColor: prop('theme.colors.button.primary.disabled.background'),
  borderColor: prop('theme.colors.button.primary.disabled.border'),
})

const appearanceGhostDefaultStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.ghost.default.font'),
  backgroundColor: prop('theme.colors.button.ghost.default.background'),
  borderColor: prop('theme.colors.button.ghost.default.border'),
})

const appearanceGhostHoverStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.ghost.hover.font'),
  backgroundColor: prop('theme.colors.button.ghost.hover.background'),
  borderColor: prop('theme.colors.button.ghost.hover.border'),
})

const appearanceGhostPressedStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.ghost.pressed.font'),
  backgroundColor: prop('theme.colors.button.ghost.pressed.background'),
  borderColor: prop('theme.colors.button.ghost.pressed.border'),
})

const appearanceGhostDisabledStyles = createAppearanceStyles({
  fontColor: prop('theme.colors.button.ghost.disabled.font'),
  backgroundColor: prop('theme.colors.button.ghost.disabled.background'),
  borderColor: prop('theme.colors.button.ghost.disabled.border'),
})

const accentDefaultStyles = createAppearanceStyles({
  backgroundColor: prop('theme.colors.button.accent.default.background'),
  borderColor: prop('theme.colors.button.accent.default.border'),
  fontColor: prop('theme.colors.button.accent.default.font'),
})

const appearanceStyles = switchProp(prop('variant', 'primary'), {
  primary: ifProp(
    prop('disabled', false),
    appearancePrimaryDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearancePrimaryPressedStyles,
      ifProp(prop('hover', false), appearancePrimaryHoverStyles, appearancePrimaryDefaultStyles)
    )
  ),
  ghost: ifProp(
    prop('disabled', false),
    appearanceGhostDisabledStyles,
    ifProp(
      prop('pressed', false),
      appearanceGhostPressedStyles,
      ifProp(prop('hover', false), appearanceGhostHoverStyles, appearanceGhostDefaultStyles)
    )
  ),
  accent: accentDefaultStyles,
})

export { appearanceStyles }
