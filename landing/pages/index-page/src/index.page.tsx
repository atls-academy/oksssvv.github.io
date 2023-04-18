import React                 from 'react'

import { LandingHero }       from '@landing/hero-fragment'
import { LandingNavigation } from '@landing/navigation-fragment'

const Fragments = () => <LandingHero />
export const IndexPage = () => (
  <>
    <LandingNavigation />
    <Fragments />
  </>
)

export default IndexPage
