import React       from 'react'

import { Divider } from '@ui/divider'
import { Layout }  from '@ui/layout'
import { Box }     from '@ui/layout'

export const Delimiter = () => (
  <Box width={[50, 96]} alignItems='center'>
    <Layout flexBasis={[12, 24]} />
    <Divider weight={[2, 5]} backgroundColor='white' />
    <Layout flexBasis={[12, 24]} />
  </Box>
)
