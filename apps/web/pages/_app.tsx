import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'
import { BackgroundLayer } from 'ui'

import darkTheme from '../themes/darkTheme'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BackgroundLayer />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default CustomApp
