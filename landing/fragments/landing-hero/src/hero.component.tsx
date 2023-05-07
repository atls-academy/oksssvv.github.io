import React          from 'react'

import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Column }     from '@ui/layout'

import { AboutUs }    from './about-us'
import { SocialLink } from './social-links'

const Hero = () => (
  <Box width='100%' backgroundColor='background.darkGray' flexDirection='column'>
    <Layout flexBasis={[252, 415]} />
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
      <Layout flexBasis={[20, 80]} />
    </Box>
  </Box>
)

export { Hero }
