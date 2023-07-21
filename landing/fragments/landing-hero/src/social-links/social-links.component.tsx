import React            from 'react'

import { Button }       from '@ui/button'
import { TelegramIcon } from '@ui/icon'
import { GitHubIcon }   from '@ui/icon'
import { EmailIcon }    from '@ui/icon'
import { Layout }       from '@ui/layout'
import { Box }          from '@ui/layout'
import { Row }          from '@ui/layout'
import { NextLink }     from '@ui/link'

export const SocialLinks = () => (
  <>
    <Box
      flexDirection='column'
      display={{ _: 'none', standard: 'none', wide: 'none', ultra: 'flex' }}
      position='absolute'
      bottom={-525}
      right={800}
      width={84}
    >
      <Button size='bigSizeBigPadding' variant='ghost'>
        <NextLink path='/'>
          <TelegramIcon width={27} height={27} />
        </NextLink>
      </Button>
      <Layout flexBasis={24} />
      <Button size='bigSizeBigPadding' variant='ghost'>
        <NextLink path='/'>
          <GitHubIcon width={27} height={27} />
        </NextLink>
      </Button>
      <Layout flexBasis={24} />
      <Button size='bigSizeBigPadding' variant='ghost'>
        <NextLink path='/'>
          <EmailIcon width={27} height={27} />
        </NextLink>
      </Button>
    </Box>
    <Box
      flexDirection='column'
      display={{ _: 'none', standard: 'flex', wide: 'flex', ultra: 'none' }}
      position={{ standard: 'relative', wide: 'absolute' }}
      bottom={{ wide: -450 }}
      right={{ wide: 40 }}
      justifyContent='end'
    >
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
    </Box>
    <Row display={['flex', 'none']} justifyContent='center'>
      <Button size='smallSizeBigPadding' variant='ghost'>
        <NextLink path='/'>
          <TelegramIcon width={15} height={12} />
        </NextLink>
      </Button>
      <Layout flexBasis={12} />
      <Button size='smallSizeBigPadding' variant='ghost'>
        <NextLink path='/'>
          <GitHubIcon width={15} height={14} />
        </NextLink>
      </Button>
      <Layout flexBasis={12} />
      <Button size='smallSizeBigPadding' variant='ghost'>
        <NextLink path='/'>
          <EmailIcon width={15} height={11} />
        </NextLink>
      </Button>
    </Row>
  </>
)
