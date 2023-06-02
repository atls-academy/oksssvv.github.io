import { Global }    from '@emotion/react'
import { css }       from '@emotion/react'

import React         from 'react'
import { useEffect } from 'react'
import { polyfill }  from 'seamless-scroll-polyfill'

export const GlobalStyles = () => {
  useEffect(() => {
    polyfill()
  }, [])

  return (
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
}
