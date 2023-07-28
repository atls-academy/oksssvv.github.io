import styled            from '@emotion/styled'

import { LayoutProps }   from 'styled-system'
import { PositionProps } from 'styled-system'
import { layout }        from 'styled-system'
import { position }      from 'styled-system'

export const Image = styled.img<LayoutProps & PositionProps>(layout, position)
