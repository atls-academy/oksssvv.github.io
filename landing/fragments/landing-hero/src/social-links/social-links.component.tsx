import React                from 'react'
import { FC }               from 'react'

import { Button }           from '@ui/button'
import { TelegramIcon }     from '@ui/icon'
import { GitHubIcon }       from '@ui/icon'
import { EmailIcon }        from '@ui/icon'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'

import { SocialLinksProps } from './social-links.intefaces'

export const SocialLinks: FC<SocialLinksProps> = ({ buttonSize, iconWidth, iconHeight, gap }) => (
  <>
    <NextLink path='https://github.com/atls-academy'>
      <Button size={buttonSize} variant='ghost'>
        <TelegramIcon width={iconWidth} height={iconHeight} />
      </Button>
    </NextLink>
    <Layout flexBasis={gap} />
    <NextLink path='https://github.com/atls-academy'>
      <Button size={buttonSize} variant='ghost'>
        <GitHubIcon width={iconWidth} height={iconHeight} />
      </Button>
    </NextLink>
    <Layout flexBasis={gap} />
    <NextLink path='https://github.com/atls-academy'>
      <Button size={buttonSize} variant='ghost'>
        <EmailIcon width={iconWidth} height={iconHeight} />
      </Button>
    </NextLink>
  </>
)
