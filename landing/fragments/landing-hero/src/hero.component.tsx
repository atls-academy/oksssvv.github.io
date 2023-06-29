import React           from 'react'

import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'

import { AboutUs }     from './about-us'
import { SocialLinks } from './social-links'

export const Hero = () => (
  <Column height={[414, 952]}>
    <Layout flexBasis={[80, 403]} />
    <Box flexDirection={['column', 'row']} justifyContent='center' alignItems={['center', 'end']}>
      <Layout flexBasis={[20, 230]} />
      <AboutUs />
      <Layout flexBasis={[24, 134]}  />
      <SocialLinks />
      <Layout flexBasis={[0, 40]} />
    </Box>
    <Layout flexBasis={[20, 50]} />
  </Column>
)
