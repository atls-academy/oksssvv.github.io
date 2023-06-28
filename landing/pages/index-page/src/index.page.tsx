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
import { Parallax }   from '@ui/parallax'

const IndexPage = () => (
  <>
    <Background variant='accent'>
      <Parallax heightSizes={[1800, 1100]}>
        <Navigation />
        <Hero />
        <Info />
      </Parallax>
    </Background>
    <Courses />
    <Background variant='purple'>
      <Steps />
      <RunLine />
      <Process />
    </Background>
    <Questions />
  </>
)

export default IndexPage
