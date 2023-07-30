import React             from 'react'

import { Box }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Slider }        from '@ui/slider'

import { imagesDesktop } from './slider.images'
import { imagesMobile }  from './slider.images'

export const SliderContainer = () => (
  <Column>
    <Box display={['none', 'flex']}>
      <Slider images={imagesDesktop} />
    </Box>
    <Box display={['flex', 'none']}>
      <Slider images={imagesMobile} />
    </Box>
  </Column>
)
