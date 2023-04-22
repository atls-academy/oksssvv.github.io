import styled                   from '@emotion/styled'
import { createBaseStyles }     from '@atls-ui-parts/link'

import { Text }                 from '@ui/text'

import { BaseLinkProps }        from './link.interfaces'
import { appearanceLinkStyles } from './link.styles'
import { shapeLinkStyles }      from './link.styles'

const Link = styled(Text.withComponent('a'))<BaseLinkProps>(
  createBaseStyles(),
  appearanceLinkStyles,
  shapeLinkStyles
)

export { Link }
