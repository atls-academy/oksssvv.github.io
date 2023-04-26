import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { ThemeProvider } from '@ui/theme'

const App = ({ Component, pageProps, props }) => (
  <IntlProvider locale='ru' defaultLocale='ru'>
    <ThemeProvider>
      <Component {...props} {...pageProps} />
    </ThemeProvider>
  </IntlProvider>
)

export default App
