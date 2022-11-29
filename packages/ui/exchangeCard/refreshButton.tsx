import SyncIcon from '@mui/icons-material/Sync'
import { Grid } from '@mui/material'
import { FC, useState } from 'react'
import { animated, config, useSpring } from 'react-spring'

interface RefreshButtonProps {
  onClick?: () => void
  fetching?: boolean
}

const RefreshButton: FC<RefreshButtonProps> = ({ fetching, onClick }) => {
  const [hover, setHover] = useState(false)

  const hoverStyle = useSpring({
    opacity: hover ? 1 : 0.8,
    scale: hover ? 1 : 0.8,
    config: config.slow,
  })

  const rotateStyle = useSpring({
    loop: true,
    pause: !fetching,
    from: {
      rotate: 360,
    },
    config: { duration: 2000, ...config.slow },
    rotate: 0,
  })

  return (
    <Grid onClick={onClick}>
      <animated.div style={{ display: 'flex', ...rotateStyle }}>
        <animated.div style={{ display: 'flex', flexGrow: 1, ...hoverStyle }}>
          <SyncIcon
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{ flexGrow: 1, color: '#A6A9B3' }}
          />
        </animated.div>
      </animated.div>
    </Grid>
  )
}

export default RefreshButton
