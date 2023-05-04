import React          from 'react'

import { Banner }     from '@landing/banner-fragment'
import { Navigation } from '@landing/navigation-fragment'
import { Background } from '@ui/background'

const Hero = () => (
  <Background
    position='relative'
    gradient='bgHeroDesktop'
    backgroundSize={['0,680px,100%,cover,0', '100% 200px,90%,0,0,cover']}
    backgroundRepeat='no-repeat'
    backgroundPosition={[
      'right top 0, -120px -185px,-20px 110px,0 0,0',
      'right top 900px, 390px -450px,0,0,0 0',
    ]}
  >
    <Navigation />
    <Banner />
  </Background>
)

export { Hero }
