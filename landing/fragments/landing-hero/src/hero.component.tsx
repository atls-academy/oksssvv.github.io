import React          from 'react'

import { Background } from '@ui/background'
import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Column }     from '@ui/layout'

import { AboutUs }    from './about-us'
import { SocialLink } from './social-links'

const Hero = () => (
  <>
    <Background
      position='relative'
      display={['none', 'flex']}
      gradient='bgHeroDesktop'
      backgroundSize='100% 200px,85%,cover'
      backgroundRepeat='no-repeat'
      backgroundPosition='right top 762px, 430px -490px , 0 0'
    >
      <Box width='100%' flexDirection='column'>
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
        </Box>
        <Layout flexBasis={[84, 48]} />
      </Box>
    </Background>

    <Background
      position='relative'
      display={['flex', 'none']}
      gradient='bgHeroDesktop'
      backgroundSize='100% 200px,85%,cover'
      backgroundRepeat='no-repeat'
      backgroundPosition='right top 762px, 430px -490px , 0 0'
    >
      <Box width='100%' flexDirection='column'>
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
        </Box>
        <Layout flexBasis={[84, 48]} />
      </Box>
    </Background>
  </>
)

export { Hero }
