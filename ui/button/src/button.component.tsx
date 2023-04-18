import styled               from '@emotion/styled'
import { Content }          from '@atls-ui-parts/button'

import React                from 'react'
import { FC }               from 'react'
import { forwardRef }       from 'react'
import { useState }         from 'react'

import { ButtonProps }      from './button.interfaces'
import { appearanceStyles } from './appearance'
import { baseStyles }       from './base'
import { shapeStyles }      from './shape'

export const ButtonElement = styled('button')(baseStyles, shapeStyles, appearanceStyles)

export const Button: FC<ButtonProps> = forwardRef(({ children, active, ...props }, ref) => {
  const [pressed, setPressed] = useState<boolean>(false)

  return (
    <ButtonElement
      pressed={pressed || active}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      {...props}
      ref={ref}
    >
      <Content divider={8}>{children}</Content>
    </ButtonElement>
  )
})
