import React          from 'react'

import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Slider }     from '@ui/slider'

import { useProcess } from '../data'

export const SliderContainer = () => {
  const process = useProcess()

  const getId = (id) => process?.data?.slides.nodes.find((obj) => obj.id === id)

  const useId = getId('cG9zdDoyNjI=')

  const getText = useId?.slider.text

  const desktopSlide = useId?.slider.imageDesktop.sourceUrl
  const mobileSlide = useId?.slider.imageMobile.sourceUrl

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
