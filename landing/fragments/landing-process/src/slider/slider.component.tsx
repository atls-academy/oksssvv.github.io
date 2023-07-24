import React             from 'react'

import { Column }        from '@ui/layout'
import { Slider }        from '@ui/slider'

import { imagesDesktop } from './slider.images'
import { imagesMobile }  from './slider.images'

export const SliderContainer = () => (
  <Column>
    <Slider images={imagesDesktop} widthImg='80%' heightImg='95%' display={['none', 'flex']} />
    <Slider images={imagesMobile} widthImg='80%' heightImg='100%' display={['flex', 'none']} />
  </Column>
)
