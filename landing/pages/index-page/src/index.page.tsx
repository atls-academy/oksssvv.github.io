import React          from 'react'

import { Hero }       from '@landing/hero-fragment'
import { Info }       from '@landing/info-fragment'
import { Navigation } from '@landing/navigation-fragment'

const Fragments = () => (
  <>
    <Hero />
    <Info />
  </>
)
export const IndexPage = () => (
  <>
    <Navigation />
    <Fragments />
  </>
)

export default IndexPage
