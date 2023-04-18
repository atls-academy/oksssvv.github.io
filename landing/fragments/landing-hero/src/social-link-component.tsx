import React            from 'react'

import { Button }       from '@ui/button'
import { IconTelegram } from '@ui/icon'
import { IconGitHub }   from '@ui/icon'
import { IconEmail }    from '@ui/icon'
import { Box }          from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Column }       from '@ui/layout'
import { Link }         from '@ui/link'

const SocialLink = () => (
  <Box width={['100%']} justifyContent='center'>
    <Box width={[335, 56]} height={[44, 200]} justifyContent='space-between'>
      <Column alignItems='center' width={['100%']}>
        <Box flexDirection={['row', 'column']} width={['100%']} justifyContent={['space-between']}>
          <Link href='https://telegram.org/' target='_blank'>
            <Box display={['none', 'flex']}>
              <Button shape='iconPaddingRounding' appearance='iconBackgroundGhost'>
                <IconTelegram />
              </Button>
            </Box>
            <Box display={['flex', 'none']}>
              <Button shape='iconSmallPaddingRounding' appearance='iconBackgroundGhost'>
                <IconTelegram />
              </Button>
            </Box>
          </Link>
          <Layout flexBasis={[12, 16]} flexShrink={[0]} />
          <Link href='https://github.com/atls-academy' target='_blank'>
            <Box display={['none', 'flex']}>
              <Button shape='iconPaddingRounding' appearance='iconBackgroundGhost'>
                <IconGitHub />
              </Button>
            </Box>
            <Box display={['flex', 'none']}>
              <Button shape='iconSmallPaddingRounding' appearance='iconBackgroundGhost'>
                <IconGitHub />
              </Button>
            </Box>
          </Link>
          <Layout flexBasis={[12, 16]} flexShrink={[0]} />
          <Link href='mailto:me@atls.academy' target='_blank'>
            <Box display={['none', 'flex']}>
              <Button shape='iconPaddingRounding' appearance='iconBackgroundGhost'>
                <IconEmail />
              </Button>
            </Box>
            <Box display={['flex', 'none']}>
              <Button shape='iconSmallPaddingRounding' appearance='iconBackgroundGhost'>
                <IconEmail />
              </Button>
            </Box>
          </Link>
        </Box>
      </Column>
    </Box>
  </Box>
)

export { SocialLink }
