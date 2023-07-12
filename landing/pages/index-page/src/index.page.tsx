import React          from 'react'
import { useRef }     from 'react'

import { Courses }    from '@landing/courses-fragment'
import { Hero }       from '@landing/hero-fragment'
import { Info }       from '@landing/info-fragment'
import { Navigation } from '@landing/navigation-fragment'
import { Process }    from '@landing/process-fragment'
import { Questions }  from '@landing/questions-fragment'
import { RunLine }    from '@landing/runline-fragment'
import { Steps }      from '@landing/steps-fragment'
import { Background } from '@ui/background'
import { Column }     from '@ui/layout'
import { Navbar }     from '@ui/navbar'
import { Parallax }   from '@ui/parallax'

const IndexPage = () => {
  const sectionRefs = Array.from({ length: 6 }, () => useRef(null)) // eslint-disable-line

  return (
    <Column>
      <Navbar sectionRefs={sectionRefs} />
      <Background
        ref={sectionRefs[0]}
        id='Academy'
        variant='purpleGradient'
        position='absolute'
        width='100%'
      >
        <Column display={['none', 'flex']} justifyContent='center'>
          <Parallax heightSizes={[1800, 1200]}>
            <Navigation />
            <Hero />
            <Info />
          </Parallax>
        </Column>
        <Column display={['flex', 'none']} justifyContent='center'>
          <Navigation />
          <Hero />
          <Info />
        </Column>
      </Background>
      <Background
        ref={sectionRefs[1]}
        id='Курсы'
        variant='white'
        borderRadius={['32px 32px 0 0', '80px 80px 0 0']}
        position='absolute'
        zIndex={1}
        top={[890, 1670]}
        width='100%'
      >
        <Courses />
      </Background>
      <Background
        ref={sectionRefs[3]}
        id='Обучение'
        variant='purple'
        borderRadius={['32px 32px 0 0', '80px 80px 0 0']}
        position='absolute'
        zIndex={2}
        top={[2600, 3690]}
        width='100%'
      >
        <Steps />
        <RunLine />
        <Process />
      </Background>
      <Background
        ref={sectionRefs[5]}
        id='FAQ'
        variant='white'
        borderRadius={['32px 32px 0 0', '80px 80px 0 0']}
        position='absolute'
        zIndex={3}
        top={[4200, 6400]}
        width='100%'
      >
        <Questions />
      </Background>
    </Column>
  )
}
export default IndexPage
