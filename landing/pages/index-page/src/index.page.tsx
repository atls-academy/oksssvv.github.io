import React          from 'react'

import { Courses }    from '@landing/courses-fragment'
import { Hero }       from '@landing/hero-fragment'
import { Info }       from '@landing/info-fragment'
import { Navigation } from '@landing/navigation-fragment'
import { Background } from '@ui/background'

export const IndexPage = () => (
  <>
    <Background
      position='relative'
      gradient='bgPurpleGradientTransitionSymbol'
      backgroundSize={[
        '0,736px 240px,170%,cover,0,0,0',
        '100% 400px,contain,90%,0,contain,100% 1080px,100% 690px',
      ]}
      backgroundRepeat='no-repeat'
      backgroundPosition={[
        '0,-260px 110px,-110px -150px,0 0,0,0,0',
        '0 0,0 250px,390px -440px,0,0 980px,0 0,0 1080px',
      ]}
    >
      <Navigation />
      <Hero />
      <Info />
    </Background>
    <Background
      position='relative'
      gradient='bgDecorativeElement'
      backgroundSize='contein'
      backgroundRepeat='no-repeat'
      backgroundPosition={['0 -500px', '0 600px']}
    >
      <Courses />
    </Background>
  </>
)

export default IndexPage
