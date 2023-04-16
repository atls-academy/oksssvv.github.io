import { createAppearanceStyles } from "@atls-ui-parts/button"

import { prop }                from 'styled-tools'
import { switchProp }          from 'styled-tools'

const iconBackgroundGhost = createAppearanceStyles({
  fontColor: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  borderColor: '0'
})

const formBackgroundGhost = createAppearanceStyles({
  fontColor: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  borderColor: '0'
})

const formBorder = createAppearanceStyles({
  fontColor: '0',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  borderColor: 'rgba(255, 255, 255, 0.25)'
})

export const appearanceStyles = switchProp(prop('appearance','normal'), {
  iconBackgroundGhost: iconBackgroundGhost,
  formBackgroundGhost: formBackgroundGhost,
  formBorder: formBorder
})

