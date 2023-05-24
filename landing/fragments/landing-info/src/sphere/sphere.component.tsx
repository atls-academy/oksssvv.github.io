import React          from 'react'

import { ImageBlock } from '@ui/image'
import { Box }        from '@ui/layout'

export const Sphere = () => (
  <Box
    display='inline-flex'
    width={['52px', '76px']}
    height={['36px', '52px']}
    backgroundColor='background.transparent'
    borderRadius={['10px', '12px']}
    justifyContent='center'
    alignItems='center'
    border='lightWhite'
  >
    <Box width={[28, 40]} height={[28, 40]}>
      <ImageBlock src='/sphere-white.png' />
    </Box>
  </Box>
)
