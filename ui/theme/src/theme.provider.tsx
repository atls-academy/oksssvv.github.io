import * as theme                                from './theme'

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

import React                                     from 'react'

import { GlobalStyles }                          from './global.styles'

export const ThemeProvider = ({ children }) => (
  <>
    <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    <GlobalStyles />
  </>
)
