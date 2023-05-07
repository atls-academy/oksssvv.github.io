import React          from 'react'

import { Hero }       from '@landing/hero-fragment'
import { Navigation } from '@landing/navigation-fragment'

const Fragments = () => <Hero />
export const IndexPage = () => (
  <>
    <Navigation />
    <Fragments />
  </>
)

export default IndexPage
