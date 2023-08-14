import React                from 'react'
import { Parallax }         from 'react-scroll-parallax'
import { ParallaxProvider } from 'react-scroll-parallax'
import { useRef }           from 'react'

import { Courses }          from '@landing/courses-fragment'
import { Faq }              from '@landing/faq-fragment'
import { Hero }             from '@landing/hero-fragment'
import { Info }             from '@landing/info-fragment'
import { Navigation }       from '@landing/navigation-fragment'
import { Process }          from '@landing/process-fragment'
import { RunLine }          from '@landing/runline-fragment'
import { Steps }            from '@landing/steps-fragment'
import { Background }       from '@ui/background'
import { Navbar }           from '@ui/navbar'

const IndexPage = () => {
  const sectionRefs = Array.from({ length: 4 }, () => useRef(null)) // eslint-disable-line

  return (
    <ParallaxProvider>
      <Navbar sectionRefs={sectionRefs} />
      <Background
        ref={sectionRefs[3]}
        id='cG9zdDoyMjE='
        backgroundColor='purpleGradient'
        position='absolute'
        width='100%'
        height={{ standard: 2000, ultra: 2300 }}
      >
        <Background
          backgroundColor='decorativeSymbol'
          backgroundSize={{
            _: '650px 570px, 0',
            standard: '1700px 1500px, 1920px 626px',
            wide: '2500px,120%',
            ultra: '3900px,100%',
          }}
          backgroundRepeat='no-repeat'
          backgroundPosition={{
            _: '-115px -150px',
            standard: '400px -410px, 0 250px',
            wide: '400px -650px,-300px 360px',
            ultra: '600px -1300px,-300px 550px',
          }}
        >
          <Parallax translateY={[-8, 12]}>
            <Navigation />
            <Hero />
            <Info />
          </Parallax>
        </Background>
      </Background>
      <Background
        ref={sectionRefs[2]}
        id='cG9zdDoyMjI='
        backgroundColor='whiteBendLine'
        backgroundSize={['100%,100%', '100%,100%']}
        backgroundRepeat='no-repeat'
        backgroundPosition={['0 370px', '0 700px']}
        borderRadius={['massiveTop', 'hugeTop']}
        position='absolute'
        zIndex={1}
        top={{ _: 890, standard: 1770, wide: 1450, ultra: 2160 }}
        width='100%'
      >
        <Courses />
      </Background>
      <Background
        ref={sectionRefs[1]}
        id='cG9zdDoyMjQ='
        backgroundColor='purpleBendLine'
        backgroundSize={{
          _: '0,0,0,100%,100%, 100%',
          standard: '1400px 1000px,0,0,100%,100%',
          wide: '2000px 1300px,150%,140%,0,0',
          ultra: '2200px 1500px,100%,100%,0,0',
        }}
        backgroundRepeat='no-repeat'
        backgroundPosition={{
          _: '0,0,0,0 1200px, 0 235px',
          standard: '200px 1600px,0,0,0 220px,0 1860px',
          wide: '300px 1560px,0 110px,-540px 1450px ,0,0',
          ultra: '920px 1850px,0 350px,0 2300px ,0,0',
        }}
        borderRadius={['massiveTop', 'hugeTop']}
        position='absolute'
        zIndex={2}
        top={{ _: 2600, standard: 3720, ultra: 4360 }}
        width='100%'
      >
        <Steps />
        <RunLine />
        <Parallax translateY={[-12, 10]}>
          <Process />
        </Parallax>
      </Background>
      <Background
        ref={sectionRefs[0]}
        id='cG9zdDoyMjU='
        backgroundColor='whiteBendLine'
        backgroundSize={['100%, 100%', '100%,100%']}
        backgroundRepeat='no-repeat'
        backgroundPosition={['0 200px', '0 220px']}
        borderRadius={['massiveTop', 'hugeTop']}
        position='absolute'
        zIndex={3}
        top={{ _: 4200, standard: 6380, wide: 6600, ultra: 7700 }}
        width='100%'
      >
        <Faq />
      </Background>
    </ParallaxProvider>
  )
}
export default IndexPage
