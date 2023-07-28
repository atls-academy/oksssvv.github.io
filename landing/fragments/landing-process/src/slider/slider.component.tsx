import React             from 'react'

import { Column }        from '@ui/layout'
import { Slider }        from '@ui/slider'

import { imagesDesktop } from './slider.images'
import { imagesMobile }  from './slider.images'

export const SliderContainer = () => (
  <Column>
    <Slider images={imagesDesktop} display={['none', 'flex']} />
    <Slider images={imagesMobile} display={['flex', 'none']} />
  </Column>
)
