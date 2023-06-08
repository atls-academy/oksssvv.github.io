import React    from 'react'
import { FC }   from 'react'

import { Link } from '@ui/link'

import { Icon } from './icon.component'

export const Logo: FC = () => (
  <Link href='/'>
    <Icon />
  </Link>
)
