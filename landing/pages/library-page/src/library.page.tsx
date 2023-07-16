import React          from 'react'

import { Library }    from '@landing/library-fragment'
import { Navigation } from '@landing/navigation-fragment'
import { Background } from '@ui/background'

const LibraryPage = () => (
  <Background backgroundColor='purpleGradient'>
    <Background
      backgroundColor='decorativeSymbol'
      backgroundSize={['650px 570px, 0', '1700px 1500px, 1920px 626px']}
      backgroundRepeat='no-repeat'
      backgroundPosition={['-115px -150px', '400px -410px, 0 250px']}
    >
      <Navigation />
      <Library />
    </Background>
  </Background>
)

export default LibraryPage
