import styled            from '@emotion/styled'
import isPropValid       from '@emotion/is-prop-valid'

import React             from 'react'
import { FC }            from 'react'
import { forwardRef }    from 'react'

import { Content }       from '@atls-ui-parts/button'

import {Layout} from '@ui/layout'
import { ButtonProps }   from './button.interfaces'
import { baseStyles }    from './button.styles'
import { shapeStyles }   from './button.styles'
import { contentStyles } from './button.styles'
import { variantStyles } from './button.styles'
import { IconAttachment } from './attachment'

const shouldForwardProp = (prop) => isPropValid(prop) && !['fill'].includes(prop)

export const ButtonElement = styled('button', { shouldForwardProp })(
  baseStyles,
  contentStyles,
  shapeStyles,
  variantStyles
)

export const Button: FC <ButtonProps> = forwardRef(({children,gap, ...props},ref)=>(
  <ButtonElement {...props} ref={ref}>
    <Content divider={8}>{children}</Content>
    <Layout flexBasis={gap} flexShrink='0'/>
    <IconAttachment
    icon={props.icon}
    containerWidth={props.containerWidth}
    containerHeight={props.containerHeight}
    containerColor={props.containerColor}
    />
  </ButtonElement>
))