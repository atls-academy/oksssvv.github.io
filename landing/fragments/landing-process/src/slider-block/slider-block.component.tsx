import React                   from 'react'

import { Column }              from '@ui/layout'
import { Slider }              from '@ui/slider'

import { sliderImagesDesktop } from './slider-block.images'
import { sliderImagesMobile }  from './slider-block.images'

export const SliderBlock = () => (
  <Column>
    <Slider
      images={sliderImagesDesktop}
      widthImg='80%'
      heightImg='95%'
      display={['none', 'flex']}
    />
    <Slider
      images={sliderImagesMobile}
      widthImg='80%'
      heightImg='100%'
      display={['flex', 'none']}
    />
  </Column>
)
