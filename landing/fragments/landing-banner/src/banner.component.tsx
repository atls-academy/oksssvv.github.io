import React          from 'react'

import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Column }     from '@ui/layout'

import { AboutUs }    from './about-us'
import { SocialLink } from './social-links'

const Banner = () => (
  <Box width='100%' flexDirection='column'>
    <Layout flexBasis={[172, 415]} />
    <Box width='100%' flexDirection={['column', 'row']}>
      <Layout flexBasis={[0, 230]} />
      <Box>
        <Layout flexBasis={[20, 0]} flexShrink='0' />
        <AboutUs />
        <Layout flexBasis={[20, 0]} flexShrink='0' />
      </Box>
      <Layout flexBasis={[24, 394]} />
      <Box>
        <Layout flexBasis={[20, 0]} flexShrink='0' />
        <Column>
          <Layout flexBasis={['none', 297]} flexShrink='0' />
          <SocialLink />
        </Column>
        <Layout flexBasis={[20, 0]} flexShrink='0' />
      </Box>
    </Box>
    <Layout flexBasis={[84, 48]} />
  </Box>
)

export { Banner }
