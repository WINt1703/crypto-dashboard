import { createTheme } from '@mui/material'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          background: 'linear-gradient(108.49deg, #AF53FF 0%, #6EACFE 95.17%)',
          color: 'white',
          fontWeight: 550,
          fontSize: 12,
          padding: '9px 21px',
          textTransform: 'none',
          '&:hover': {
            boxShadow: '0 0 10px 2px rgba(255,255,255,.24);',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#181A25',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#151823',
          border: '1px solid #303241',
          borderRadius: '12px',
          padding: '10px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: 'none',
          '&:focus': {
            border: 'none',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: '#212432',
          border: '1px solid #3b3f4f',
          boxShadow: '0 0 20px -5px #2F2D4B',
        },
        arrow: {
          '&::before': {
            background: '#212432',
            border: '1px solid #3b3f4f',
          },
        },
      },
    },
  },
})

export default darkTheme
