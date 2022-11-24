import EastIcon from '@mui/icons-material/East'
import { FC, useState } from 'react'
import { animated, config, useSpring } from 'react-spring'

interface TransferButtonProps {
  onClick?: () => void
}

const TransferButton: FC<TransferButtonProps> = ({ onClick }) => {
  const [toggle, setToggle] = useState(false)
  const styles = useSpring({
    config: config.molasses,
    rotateZ: toggle ? 180 : 0,
  })

  const clickHandler = () => {
    setToggle((previous) => !previous)
    onClick?.()
  }

  return (
    <animated.div style={{ ...styles, width: '20px', height: '20px' }}>
      <EastIcon onClick={clickHandler} sx={{ color: '#A6A9B3' }} />
    </animated.div>
  )
}

export default TransferButton
