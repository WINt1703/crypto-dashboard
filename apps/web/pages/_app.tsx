import { ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'

import darkTheme from '../themes/darkTheme'

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default CustomApp
