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
      top={990}
      right={620}
    >
      <NextLink path='https://github.com/atls-academy'>
        <Button size='bigSizeBigRadii' variant='ghost'>
          <TelegramIcon width={27} height={27} />
        </Button>{' '}
      </NextLink>
      <Layout flexBasis={24} />{' '}
      <NextLink path='https://github.com/atls-academy'>
        <Button size='bigSizeBigRadii' variant='ghost'>
          <GitHubIcon width={27} height={27} />
        </Button>{' '}
      </NextLink>
      <Layout flexBasis={24} />{' '}
      <NextLink path='https://github.com/atls-academy'>
        <Button size='bigSizeBigRadii' variant='ghost'>
          <EmailIcon width={27} height={27} />
        </Button>{' '}
      </NextLink>
    </Box>
    <Box
      flexDirection='column'
      display={{ _: 'none', standard: 'flex', wide: 'flex', ultra: 'none' }}
      position={{ standard: 'relative', wide: 'absolute' }}
      bottom={{ wide: -450 }}
      right={{ wide: 40 }}
      justifyContent='end'
    >
      <NextLink path='https://github.com/atls-academy'>
        <Button size='smallSizeSmallPadding' variant='ghost'>
          <TelegramIcon width={18} height={15} />
        </Button>
      </NextLink>
      <Layout flexBasis={16} />{' '}
      <NextLink path='https://github.com/atls-academy'>
        <Button size='smallSizeSmallPadding' variant='ghost'>
          <GitHubIcon width={18} height={17} />
        </Button>{' '}
      </NextLink>
      <Layout flexBasis={16} />{' '}
      <NextLink path='https://github.com/atls-academy'>
        <Button size='smallSizeSmallPadding' variant='ghost'>
          <EmailIcon width={18} height={14} />
        </Button>{' '}
      </NextLink>
    </Box>
    <Row display={['flex', 'none']} justifyContent='center'>
      {' '}
      <NextLink path='https://github.com/atls-academy'>
        <Button size='smallSizeBigPadding' variant='ghost'>
          <TelegramIcon width={15} height={12} />
        </Button>{' '}
      </NextLink>
      <Layout flexBasis={12} />{' '}
      <NextLink path='https://github.com/atls-academy'>
        <Button size='smallSizeBigPadding' variant='ghost'>
          <GitHubIcon width={15} height={14} />
        </Button>{' '}
      </NextLink>
      <Layout flexBasis={12} />{' '}
      <NextLink path='https://github.com/atls-academy'>
        <Button size='smallSizeBigPadding' variant='ghost'>
          <EmailIcon width={15} height={11} />
        </Button>{' '}
      </NextLink>
    </Row>
  </>
)
