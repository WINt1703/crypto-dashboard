import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import { CoinInformation } from 'api/coingecko/models'
import Image from 'next/image'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

interface CoinInputProps {
  defaultValue?: CoinInputField
  onChange?: (value: CoinInputField) => void
  coins: Array<CoinInformation>
}

export interface CoinInputField {
  count?: number
  coin: CoinInformation
}

interface CoinInputForm {
  coinCount: string
  coinId: string
}

const COIN_REGEX = /^\d{1,5}(\.\d{0,4})?$/

const CoinInput: FC<CoinInputProps> = ({ coins, onChange, defaultValue }) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
  } = useForm<CoinInputForm>({
    mode: 'onChange',
    defaultValues: {
      coinId: defaultValue?.coin.id ?? coins[0].id,
    },
  })
  const { coinId } = watch()

  const onChangeHandler = (data: CoinInputForm) => {
    const coin = coins.find((c) => c.id === data.coinId)

    if (coin && onChange) onChange({ coin, count: +data.coinCount })
  }

  const titleToolTip = (): JSX.Element | undefined => {
    const currentCoin = coins.find((c) => c.id === coinId)

    return (
      currentCoin && (
        <Typography fontSize="14px">
          Name: {currentCoin.name} <br />
          Price: {currentCoin.currentPrice} $
        </Typography>
      )
    )
  }

  return (
    <>
      <Tooltip arrow placement="bottom" title={titleToolTip()}>
        <Stack
          bgcolor="#151823"
          borderRadius="10px"
          border="1px solid #303241"
          alignItems="center"
          height="40px"
          direction="row"
        >
          <TextField
            {...register('coinCount', {
              pattern: COIN_REGEX,
              required: true,
              onChange: handleSubmit(onChangeHandler),
            })}
            sx={{
              flexGrow: 1,
            }}
            placeholder="0"
          />

          <Select
            SelectDisplayProps={{
              style: {
                display: 'flex',
                justifyContent: 'center',
                marginRight: '20px',
              },
            }}
            {...register('coinId', { required: true })}
            defaultValue={defaultValue?.coin.id ?? coins[0].id}
            IconComponent={ExpandMoreIcon}
          >
            {coins.map((c) => (
              <MenuItem
                sx={{ justifyContent: 'center' }}
                key={c.id}
                value={c.id}
              >
                <Image width={25} height={25} src={c.image} alt={c.name} />
              </MenuItem>
            ))}
          </Select>
        </Stack>
      </Tooltip>
      {errors.coinCount && (
        <Typography fontSize="12px" color="red">
          Incorrect coin count
        </Typography>
      )}
    </>
  )
}

export default CoinInput
