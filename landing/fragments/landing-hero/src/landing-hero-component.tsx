import React          from 'react'

import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Column }     from '@ui/layout'
import { Row }        from '@ui/layout'

import { Lead }       from './lead-component'
import { SocialLink } from './social-link-component'

const LandingHero = () => (
  <Box width={['100%']} backgroundColor='#616161' flexDirection={['column']} margin={['none']}>
    <Column>
      <Layout flexBasis={[252, 415]} />
    </Column>
    <Row width={['100%']}>
      <Box width={['100%']} flexDirection={['column', 'row']} backgroundColor='#616161'>
        <Layout flexBasis={[0, 230]} />
        <Box>
          <Layout flexBasis={[20, 0]} flexShrink={[0]} />
          <Lead />
          <Layout flexBasis={[20, 0]} flexShrink={[0]} />
        </Box>
        <Layout flexBasis={[24, 394]} />
        <Box>
          <Layout flexBasis={[20, 0]} flexShrink={[0]} />
          <Column>
            <Layout flexBasis={['none', 297]} flexShrink={[0]} />
            <SocialLink />
          </Column>
          <Layout flexBasis={[20, 0]} flexShrink={[0]} />
        </Box>
        <Layout flexBasis={[20, 80]} />
      </Box>
    </Row>
  </Box>
)

export { LandingHero }
