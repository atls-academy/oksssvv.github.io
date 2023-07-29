import React             from 'react'

import { Condition }     from '@ui/condition'
import { Column }        from '@ui/layout'
import { Slider }        from '@ui/slider'
import { useWindow }     from '@ui/utils'

import { imagesDesktop } from './slider.images'
import { imagesMobile }  from './slider.images'

export const SliderContainer = () => {
  const { isMobile, isDesktop } = useWindow()
  return (
    <Column>
      <Condition match={isDesktop}>
        <Slider images={imagesDesktop} />
      </Condition>
      <Condition match={isMobile}>
        <Slider images={imagesMobile} />
      </Condition>
    </Column>
  )
}
