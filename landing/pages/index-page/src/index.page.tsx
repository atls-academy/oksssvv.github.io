import React          from 'react'

import { Hero }       from '@landing/hero-fragment'
import { Info }       from '@landing/info-fragment'
import { Navigation } from '@landing/navigation-fragment'
import { Background } from '@ui/background'

export const IndexPage = () => (
  <>
  
    <Navigation />
    <Hero />
    <Info />
  </>
)

export default IndexPage
