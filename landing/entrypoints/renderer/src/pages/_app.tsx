import { ThemeProvider } from '@emotion/react'

import React             from 'react'

import { GlobalStyles }  from '@ui/theme/src/global.styles'
import { theme }         from '@ui/theme'

const App = ({ Component, pageProps, ...props }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Component {...pageProps} {...props} />
  </ThemeProvider>
)

export default App
