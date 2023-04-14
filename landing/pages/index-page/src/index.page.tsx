import React from 'react'

import { LandingNavigation } from '@landing/navigation-fragment'
import { LandingHero } from '@landing/hero-fragment'

const Fragments = () => (
  <LandingHero/>
)
export const IndexPage = () => (
  <>
    <LandingNavigation/>
    <Fragments/>
  </>
)

export default IndexPage