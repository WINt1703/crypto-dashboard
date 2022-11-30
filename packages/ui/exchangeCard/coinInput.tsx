import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import { CoinInformation } from 'apis/coingecko/models'
import Image from 'next/image'
import { FC, useMemo } from 'react'
import { useForm } from 'react-hook-form'

interface CoinInputProps {
  value?: CoinInputField
  onChange?: (value: CoinInputField) => void
  coins: Array<CoinInformation>
  excludesCoins?: Array<CoinInformation>
}

export interface CoinInputField {
  count?: number
  coin: CoinInformation
}

interface CoinInputForm {
  count: string
  coinJson: string
}

const COIN_REGEX = /^\d{1,5}(\.\d{0,4})?$/

const CoinInput: FC<CoinInputProps> = ({
  coins,
  onChange,
  value,
  excludesCoins,
}) => {
  const filteredCoins = useMemo(
    () => coins.filter((c) => !excludesCoins?.some((ec) => ec.id === c.id)),
    [coins, excludesCoins],
  )

  const {
    formState: { errors, defaultValues },
    register,
    handleSubmit,
    watch,
  } = useForm<CoinInputForm>({
    mode: 'onChange',
    defaultValues: {
      coinJson: JSON.stringify(value?.coin ?? filteredCoins[0]),
    },
  })
  const { coinJson, count } = watch()

  const onChangeHandler = (data: CoinInputForm) => {
    if (data.coinJson && onChange)
      onChange({
        coin: JSON.parse(data.coinJson) as CoinInformation,
        count: +data.count,
      })
  }

  const titleToolTip = (): JSX.Element | undefined => {
    const coin = JSON.parse(coinJson) as CoinInformation

    return (
      <Typography fontSize="14px">
        Name: {coin.name} <br />
        Price: {coin.currentPrice} $
      </Typography>
    )
  }

  return (
    <Grid>
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
            {...register('count', {
              pattern: COIN_REGEX,
              value: value?.count?.toString() ?? count,
              onChange: handleSubmit(onChangeHandler),
            })}
            sx={{
              flexGrow: 1,
            }}
            placeholder="0"
          />

          <Select
            renderValue={(coinJson: string) => {
              const coin = JSON.parse(coinJson) as CoinInformation

              return (
                <Image
                  width={25}
                  height={25}
                  src={coin.image}
                  alt={coin.name}
                />
              )
            }}
            SelectDisplayProps={{
              style: {
                display: 'flex',
                justifyContent: 'center',
                marginRight: '20px',
              },
            }}
            {...register('coinJson', {
              value: value?.coin ? JSON.stringify(value.coin) : coinJson,
              required: true,
              onChange: handleSubmit(onChangeHandler),
            })}
            defaultValue={defaultValues?.coinJson}
            IconComponent={ExpandMoreIcon}
          >
            {filteredCoins.map((c) => (
              <MenuItem
                sx={{ justifyContent: 'center' }}
                key={c.id}
                value={JSON.stringify(c)}
              >
                <Image width={25} height={25} src={c.image} alt={c.name} />
              </MenuItem>
            ))}
          </Select>
        </Stack>
      </Tooltip>
      {errors.count && (
        <Typography fontSize="12px" color="red">
          Incorrect coin count
        </Typography>
      )}
    </Grid>
  )
}

export default CoinInput
