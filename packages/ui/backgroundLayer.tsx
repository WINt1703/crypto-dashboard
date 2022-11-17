import { Grid } from '@mui/material'
import { FC } from 'react'

type EllipseBaseStyle = {
  width: string
  height: string
  position: 'absolute'
  sx: {
    opacity: number
    filter: string
    borderRadius: string
  }
}

export const BackgroundLayer: FC = () => {
  const ellipseStyle: EllipseBaseStyle = {
    width: '150px',
    height: '150px',
    position: 'absolute',
    sx: {
      filter: 'blur(50px)',
      opacity: 0.3,
      borderRadius: '100%',
    },
  }

  return (
    <Grid
      overflow="hidden"
      zIndex={-1}
      position="absolute"
      top={0}
      bottom={0}
      right={0}
      left={0}
    >
      <Grid {...ellipseStyle} bgcolor="#20CD7E" top={181} left={-33} />
      <Grid {...ellipseStyle} bgcolor="#F74440" top={-90} right={80} />
      <Grid {...ellipseStyle} bgcolor="#947DF1" bottom={-80} left="30%" />
    </Grid>
  )
}
