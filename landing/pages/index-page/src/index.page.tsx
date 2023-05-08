import React          from 'react'

import { Hero }       from '@landing/hero-fragment'
import { Info }       from '@landing/info-fragment'
import { Navigation } from '@landing/navigation-fragment'
import { Background } from '@ui/background'

export const IndexPage = () => (
  <Background
    position='relative'
    gradient='bgPage'
    backgroundSize={['100%,170%,cover,0,0,0', '0,90%,0,100% 200px, 100% 1080px, 100% 670px']}
    backgroundRepeat='no-repeat'
    backgroundPosition={[
      '0 110px,-110px -150px,0 0,0,0,0',
      '0,390px -440px,0,0 880px,0 0,0 1080px',
    ]}
  >
    <Navigation />
    <Hero />
    <Info />
  </Background>
)

export default IndexPage
