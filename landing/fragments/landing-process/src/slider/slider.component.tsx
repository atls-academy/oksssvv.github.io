import React            from 'react'

import { Box }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { Slider }       from '@ui/slider'

import { useProcess }   from '../data'
import { imagesMobile } from './slider.images'

export const SliderContainer = () => {
  const process = useProcess()

  const getText = process?.data?.slides.nodes[0].slider.text

  const desktopSlide = process?.data?.slides.nodes[0].slider.image.sourceUrl

  const desktopSlides = [desktopSlide, desktopSlide]

  return (
    <Column>
      <Box display={['none', 'flex']}>
        <Slider images={desktopSlides} description={getText} />
      </Box>
      <Box display={['flex', 'none']}>
        <Slider images={imagesMobile} description={getText} />
      </Box>
    </Column>
  )
}
