import styled               from '@emotion/styled'
import { Content }          from '@atls-ui-parts/button'

import React                from 'react'
import { FC }               from 'react'
import { forwardRef }       from 'react'
import { useState }         from 'react'

import { Layout }           from '@ui/layout'
import { useHover }         from '@ui/utils'

import { ButtonProps }      from './button.interfaces'
import { IconAttachment }   from './icon-attachment'
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

export const Button: FC<ButtonProps> = forwardRef(({ children, gap, ...props }, ref) => {
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
      ref={ref}
    >
      <Content divider={8}>{children}</Content>
      <Layout flexBasis={gap} />
      <IconAttachment
        iconSVG={props.iconSVG}
        iconRadius={props.iconRadius}
        iconWidth={props.iconWidth}
        iconHeight={props.iconHeight}
      />
    </ButtonElement>
  )
})
