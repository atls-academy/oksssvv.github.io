import React            from 'react'

import { Button }       from '@ui/button'
import { IconTelegram } from '@ui/icon'
import { IconGitHub }   from '@ui/icon'
import { IconEmail }    from '@ui/icon'
import { Layout }       from '@ui/layout'
import { Box }          from '@ui/layout'
import { Link }         from '@ui/link'

export const SocialLink = () => (
  <Box flexDirection={['row', 'column']} width={[335, 56]} height={[44, 200]}>
    <Box display={['none', 'flex']}>
      <Link href='https://telegram.org/' target='_blank'>
        <Button size='normalPaddingNormalHeight' variant='transparentBackground'>
          <IconTelegram />
        </Button>
      </Link>
    </Box>
    <Box display={['flex', 'none']}>
      <Link href='https://telegram.org/' target='_blank'>
        <Button size='bigPaddingSmallHeight' variant='transparentBackground'>
          <IconTelegram />
        </Button>
      </Link>
    </Box>
    <Layout flexBasis={[12, 16]} />
    <Box display={['none', 'flex']}>
      <Link href='https://github.com/atls-academy' target='_blank'>
        <Button size='normalPaddingNormalHeight' variant='transparentBackground'>
          <IconGitHub />
        </Button>
      </Link>
    </Box>
    <Box display={['flex', 'none']}>
      <Link href='https://github.com/atls-academy' target='_blank'>
        <Button size='bigPaddingSmallHeight' variant='transparentBackground'>
          <IconGitHub />
        </Button>
      </Link>
    </Box>
    <Layout flexBasis={[12, 16]} />
    <Box display={['none', 'flex']}>
      <Link href='mailto:me@atls.academy' target='_blank'>
        <Button size='normalPaddingNormalHeight' variant='transparentBackground'>
          <IconEmail />
        </Button>
      </Link>
    </Box>
    <Box display={['flex', 'none']}>
      <Link href='mailto:me@atls.academy' target='_blank'>
        <Button size='bigPaddingSmallHeight' variant='transparentBackground'>
          <IconEmail />
        </Button>
      </Link>
    </Box>
  </Box>
)
