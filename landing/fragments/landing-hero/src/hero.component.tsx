import React           from 'react'

import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'

import { AboutUs }     from './about-us'
import { SocialLinks } from './social-links'

export const Hero = () => (
  <Column>
    <Layout flexBasis={{ _: 80, standard: 403, wide: 256, ultra: 428 }} />
    <Box
      flexDirection={['column', 'row']}
      justifyContent='center'
      alignItems={['center', 'end']}
      position='relative'
    >
      <Layout flexBasis={{ _: 20, standard: 230, wide: 230, ultra: 620 }} />
      <AboutUs />
      <Layout flexBasis={[24, 134]} />
      <SocialLinks />
      <Layout flexBasis={{ _: 0, standard: 40, wide: 720, ultra: 1030 }} />
    </Box>
    <Layout flexBasis={[20, 0]} />
  </Column>
)
