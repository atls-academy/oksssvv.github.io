import styled               from '@emotion/styled'
import { Content }          from '@atls-ui-parts/button'

import React                from 'react'
import { FC }               from 'react'
import { forwardRef }       from 'react'

import { ButtonProps }      from './button.interfaces'
import { appearanceStyles } from './button.styles'
import { baseStyles }       from './button.styles'
import { shapeStyles }      from './button.styles'

export const ButtonElement = styled('button')(baseStyles, shapeStyles, appearanceStyles)

export const Button: FC<ButtonProps> = forwardRef(({ children, ...props }, ref) => (
  <ButtonElement {...props} ref={ref}>
    <Content divider={8}>{children}</Content>
  </ButtonElement>
))
