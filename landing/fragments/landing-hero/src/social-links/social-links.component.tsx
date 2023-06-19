import React            from 'react'

import { Button }       from '@ui/button'
import { TelegramIcon } from '@ui/icon'
import { GitHubIcon }   from '@ui/icon'
import { EmailIcon }    from '@ui/icon'
import { Layout }       from '@ui/layout'
import { Column }       from '@ui/layout'
import { Row }          from '@ui/layout'
import { NextLink }     from '@ui/link'

export const SocialLinks = () => (
  <>
    <Column display={['none', 'flex']}>
      <Button size='smallSizeSmallPadding' variant='ghost'>
        <NextLink path='/'>
          <TelegramIcon width={18} height={15} />
        </NextLink>
      </Button>
      <Layout flexBasis={16} />
      <Button size='smallSizeSmallPadding' variant='ghost'>
        <NextLink path='/'>
          <GitHubIcon width={18} height={17} />
        </NextLink>
      </Button>
      <Layout flexBasis={16} />
      <Button size='smallSizeSmallPadding' variant='ghost'>
        <NextLink path='/'>
          <EmailIcon width={18} height={14} />
        </NextLink>
      </Button>
    </Column>
    <Row display={['flex', 'none']} justifyContent='center'>
      <Button size='smallSizeBigPadding' variant='ghost'>
        <NextLink path='/'>
          <TelegramIcon width={15} height={12} />
        </NextLink>
      </Button>
      <Layout flexBasis={12} flexShrink='0' />
      <Button size='smallSizeBigPadding' variant='ghost'>
        <NextLink path='/'>
          <GitHubIcon width={15} height={14} />
        </NextLink>
      </Button>
      <Layout flexBasis={12} flexShrink='0' />
      <Button size='smallSizeBigPadding' variant='ghost'>
        <NextLink path='/'>
          <EmailIcon width={15} height={11} />
        </NextLink>
      </Button>
    </Row>
  </>
)
