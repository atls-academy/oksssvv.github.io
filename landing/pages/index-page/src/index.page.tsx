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
import { Navbar }     from '@ui/navbar'
import { Parallax }   from '@ui/parallax'

const Sections = [
  { index: 0, name: 'Academy', id: 'SectionHero' },
  { index: 1, name: 'Курсы', id: 'SectionCourses' },
  { index: 2, name: 'Ученики', id: '/' },
  { index: 3, name: 'Обучение', id: 'SectionSteps' },
  { index: 4, name: 'Стипендия', id: '/' },
  { index: 5, name: 'FAQ', id: 'SectionQuestions' },
]

const IndexPage = () => (
  <>
    <Navbar sections={Sections} />
    <Background id='SectionHero' variant='purpleGradient' position='absolute' width='100%'>
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
      id='SectionCourses'
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
      id='SectionSteps'
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
      id='SectionQuestions'
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
