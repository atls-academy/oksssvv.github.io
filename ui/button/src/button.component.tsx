import isPropValid          from '@emotion/is-prop-valid'
import styled               from '@emotion/styled'
import { Content }          from '@atls-ui-parts/button'

import React                from 'react'
import { FC }               from 'react'
import { forwardRef }       from 'react'

import { Layout }           from '@ui/layout'
import { useHover }         from '@ui/utils'
import { usePressed }       from '@ui/utils'

import { IconAttachment }   from './attachment'
import { ButtonProps }      from './button.interfaces'
import { appearanceStyles } from './button.appearance-styles'
import { baseStyles }       from './button.base-styles'
import { contentStyles }    from './button.content-styles'
import { shapeStyles }      from './button.shape-styles'

const shouldForwardProp = (prop) => isPropValid(prop) && !['fill'].includes(prop)

export const ButtonElement = styled('button', { shouldForwardProp })(
  baseStyles,
  contentStyles,
  shapeStyles,
  appearanceStyles
)

export const Button: FC<ButtonProps> = forwardRef(({ children, gap, ...props }, ref) => {
  const [hover, hoverProps] = useHover()
  const [pressed, pressedProps] = usePressed()

  return (
    <ButtonElement
      hover={hover}
      pressed={pressed}
      ref={ref}
      {...props}
      {...hoverProps}
      {...pressedProps}
    >
      <Content>{children}</Content>
      <Layout flexBasis={gap} />
      <IconAttachment
        icon={props.icon}
        widthIcon={props.widthIcon}
        heightIcon={props.heightIcon}
        backgroundIcon={props.backgroundIcon}
        radiusIcon={props.radiusIcon}
      />
    </ButtonElement>
  )
})
