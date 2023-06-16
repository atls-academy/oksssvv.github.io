import styled         from '@emotion/styled'

import { background } from 'styled-system'
import { position }   from 'styled-system'
import { border }     from 'styled-system'

const Background = styled.div(
  ({ theme, variant }) => ({
    background: variant ? theme.backgrounds[variant] : 'none',
  }),
  background,
  position,
  border
)
export { Background }
