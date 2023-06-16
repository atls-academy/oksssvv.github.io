import { Global } from '@emotion/react'
import { css }    from '@emotion/react'

import React      from 'react'

export const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "GellaDisplay";
        src: url("/font/gella-display.otf")
      }
      html,
      body,
      #__next {        
        margin: 0;
      }
    `}
  />
)
