import React            from 'react'

import { TelegramIcon } from '@ui/icon'
import { GitHubIcon }   from '@ui/icon'
import { EmailIcon }    from '@ui/icon'
import { Layout }       from '@ui/layout'
import { Box }          from '@ui/layout'
import { Link }         from '@ui/link'

export const SocialLinks = () => (
  <Box flexDirection={['row', 'column']} flexShrink='0'>
    <Box width={[103, 56]} height={[44, 56]} justifyContent='center' alignItems='center'>
      <Link href='/'>
        <TelegramIcon />
      </Link>
    </Box>
    <Layout flexBasis={[12, 16]} flexShrink='0' />
    <Box width={[103, 56]} height={[44, 56]} justifyContent='center' alignItems='center'>
      <Link href='/'>
        <GitHubIcon />
      </Link>
    </Box>
    <Layout flexBasis={[12, 16]} flexShrink='0' />
    <Box width={[103, 56]} height={[44, 56]} justifyContent='center' alignItems='center'>
      <Link href='/'>
        <EmailIcon />
      </Link>
    </Box>
  </Box>
)
