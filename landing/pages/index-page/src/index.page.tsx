import React          from 'react'

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
import { Parallax }   from '@ui/parallax'

const IndexPage = () => (
  <>
    <Background variant='accent' position='absolute' zIndex={0} width='100%'>
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
      variant='white'
      borderRadius={['32px 32px 0 0', '80px 80px 0 0']}
      position='absolute'
      zIndex={3}
      top={[4200, 6400]}
      width='100%'
    >
      <Questions />
    </Background>
  </>
)

export default IndexPage
