import React         from 'react'
import { FC }        from 'react'

import { NextLink }  from '@ui/link'

import { Icon }      from './icon.component'
import { LogoProps } from './logo.interfaces'

const Logo: FC<LogoProps> = ({ ...props }) => (
  <NextLink path='/'>
    <Icon color={props.color} />
  </NextLink>
)

export { Logo }
