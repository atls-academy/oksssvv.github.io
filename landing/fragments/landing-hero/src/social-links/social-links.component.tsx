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
  <Box width='100%' justifyContent='center'>
    <Box width={[335, 56]} height={[44, 200]} justifyContent='space-between'>
      <Column alignItems='center' width='100%'>
        <Box flexDirection={['row', 'column']} width='100%' justifyContent='space-between'>
          <Box display={['none', 'flex']}>
            <Link href='https://telegram.org/' target='_blank'>
              <Button size='normal' colors='transparent'>
                <IconTelegram />
              </Button>
            </Link>
          </Box>
          <Box display={['flex', 'none']}>
            <Link href='https://telegram.org/' target='_blank'>
              <Button size='wide' colors='transparent'>
                <IconTelegram />
              </Button>
            </Link>
          </Box>
          <Layout flexBasis={[12, 16]} flexShrink='0' />
          <Box display={['none', 'flex']}>
            <Link href='https://github.com/atls-academy' target='_blank'>
              <Button size='normal' colors='transparent'>
                <IconGitHub />
              </Button>
            </Link>
          </Box>
          <Box display={['flex', 'none']}>
            <Link href='https://github.com/atls-academy' target='_blank'>
              <Button size='wide' colors='transparent'>
                <IconGitHub />
              </Button>
            </Link>
          </Box>
          <Layout flexBasis={[12, 16]} flexShrink='0' />
          <Box display={['none', 'flex']}>
            <Link href='mailto:me@atls.academy' target='_blank'>
              <Button size='normal' colors='transparent'>
                <IconEmail />
              </Button>
            </Link>
          </Box>
          <Box display={['flex', 'none']}>
            <Link href='mailto:me@atls.academy' target='_blank'>
              <Button size='wide' colors='transparent'>
                <IconEmail />
              </Button>
            </Link>
          </Box>
        </Box>
      </Column>
    </Box>
  </Box>
)

export { SocialLink }
