import React          from 'react'

import { Courses }    from '@landing/courses-fragment'
import { Hero }       from '@landing/hero-fragment'
import { Info }       from '@landing/info-fragment'
import { Navigation } from '@landing/navigation-fragment'
import { Process }    from '@landing/process-fragment'
import { Background } from '@ui/background'

export const IndexPage = () => (
  <>
    <Background
      position='relative'
      gradient='purpleGradientTransitionSymbol'
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
      gradient='decorativeElement'
      backgroundSize='100%'
      backgroundRepeat='no-repeat'
      backgroundPosition={['0 -500px', '0 650px']}
    >
      <Courses />
    </Background>
    <Background
      position='relative'
      gradient='veryDarkPurpleAndDecorativeElement'
      backgroundSize={['0,100%,cover', '400px,100%,cover']}
      backgroundRepeat='no-repeat'
      backgroundPosition={['0,0 215px,0 0', '750px 310px,0 200px,0 0']}
    >
      <Process />
    </Background>
  </>
)

export default IndexPage
