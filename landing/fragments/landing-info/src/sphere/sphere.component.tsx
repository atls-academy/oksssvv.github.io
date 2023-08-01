import React     from 'react'

import { Image } from '@ui/image'
import { Box }   from '@ui/layout'
import { Space } from '@ui/text'

export const Sphere = () => (
  <>
    <Space count={3} />
    <Box
      display={['none', 'inline-flex']}
      width={{ standard: 76, ultra: 114 }}
      height={{ standard: 52, ultra: 78 }}
      justifyContent='center'
      alignItems='center'
      backgroundColor='background.ghost'
      verticalAlign='sub'
      borderRadius={{ standard: 'normal', ultra: 'massive' }}
    >
      <Image width={{ standard: 40, ultra: 60 }} src='/sphere-white.png' />
    </Box>
    <Space count={3} />
  </>
)
