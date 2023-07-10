import React      from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'

import { Items }  from './items'

export const Navbar = ({ sections }) => (
  <Box position='absolute'>
    <Box
      width={138}
      height={190}
      position='fixed'
      top={540}
      left={40}
      zIndex={5}
      alignItems='center'
    >
      <Box backgroundColor='gray' width={2} height={175} />
      <Layout flexBasis={20} />
      <Column>
        <Items sections={sections} />
      </Column>
    </Box>
  </Box>
)
