import React         from 'react'
import { FC }        from 'react'
import { useRouter } from 'next/router'

import { NextLink }  from '@ui/link'
import { Link }      from '@ui/link'

import { Icon }      from './icon.component'
import { LogoProps } from './logo.interfaces'

const Logo: FC<LogoProps> = ({ ...props }) => {
  const router = useRouter()

  if (router.route === '/') {
    return (
      // eslint-disable-next-line
      <Link href='#'>
        <Icon color={props.color} />
      </Link>
    )
  }

  return (
    <NextLink path='/'>
      <Icon color={props.color} />
    </NextLink>
  )
}
export { Logo }
