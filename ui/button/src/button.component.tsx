import styled               from '@emotion/styled'
import { Content }          from '@atls-ui-parts/button'

import React                from 'react'
import { FC }               from 'react'
import { forwardRef }       from 'react'
import { useState }         from 'react'

import { useHover }         from '@ui/utils'

import { ButtonProps }      from './button.interfaces'
import { baseStyles }       from './button.styles'
import { shapeStyles }      from './button.styles'
import { contentStyles }    from './button.styles'
import { fillStyles }       from './button.styles'
import { appearanceStyles } from './styles'

export const ButtonElement = styled('button')<any>(
  baseStyles,
  contentStyles,
  shapeStyles,
  appearanceStyles,
  fillStyles
)

export const Button: FC<ButtonProps> = forwardRef(({ children, ...props }) => {
  const [hover, hoverProps] = useHover()
  const [pressed, setPressed] = useState<boolean>(false)

  return (
    <ButtonElement
      hover={hover}
      pressed={pressed}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      {...hoverProps}
      {...props}
    >
      <Content divider={8}>{children}</Content>
    </ButtonElement>
  )
})
