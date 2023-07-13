import React     from 'react'

import { Image }  from '@ui/image'
import { Box }   from '@ui/layout'
import { Space } from '@ui/text'

export const Sphere = () => (
  <>
    <Space count={3} />
    <Box
      display={['none', 'inline-flex']}
      width={76}
      height={52}
      justifyContent='center'
      alignItems='center'
      backgroundColor='background.ghost'
      verticalAlign='sub'
      borderRadius={12}
    >
      <Image width={40} src='/sphere-white.png' />
    </Box>
    <Space count={3} />
  </>
)
