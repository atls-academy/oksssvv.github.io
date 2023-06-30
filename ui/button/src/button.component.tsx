import isPropValid          from '@emotion/is-prop-valid'
import styled               from '@emotion/styled'
import { Content }          from '@atls-ui-parts/button'

import React                from 'react'
import { FC }               from 'react'
import { forwardRef }       from 'react'

import { Layout }           from '@ui/layout'

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

export const Button: FC<ButtonProps> = forwardRef(({ children, gap, ...props }, ref) => (
  <ButtonElement {...props} ref={ref}>
    <Content divider={8}>{children}</Content>
    <Layout flexBasis={gap} flexShrink='0' />
    <IconAttachment
      icon={props.icon}
      containerWidth={props.containerWidth}
      containerHeight={props.containerHeight}
      containerColor={props.containerColor}
      containerRadius={props.containerRadius}
    />
  </ButtonElement>
))
