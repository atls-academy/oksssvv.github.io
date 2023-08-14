import React          from 'react'

import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Slider }     from '@ui/slider'

import { useProcess } from '../data'

export const SliderContainer = () => {
  const process = useProcess()

  const getText = process?.data?.slides.nodes[0].slider.text

  const desktopSlide = process?.data?.slides.nodes[0].slider.imageDesktop.sourceUrl
  const mobileSlide = process?.data?.slides.nodes[0].slider.imageMobile.sourceUrl

  const desktopSlides = [desktopSlide, desktopSlide]
  const mobileSlides = [mobileSlide, mobileSlide]

  return (
    <Column>
      <Box display={['none', 'flex']}>
        <Slider images={desktopSlides} description={getText} />
      </Box>
      <Box display={['flex', 'none']}>
        <Slider images={mobileSlides} description={getText} />
      </Box>
    </Column>
  )
}
