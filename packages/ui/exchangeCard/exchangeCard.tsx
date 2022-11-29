import SwapVertIcon from '@mui/icons-material/SwapVert'
import { Button, Card, Grid, Stack, Typography } from '@mui/material'
import { CoinInformation } from 'api/coingecko/models'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import CoinInput, { CoinInputField } from './coinInput'
import RefreshButton from './refreshButton'

export interface ExchangeCardData {
  coins: Array<CoinInformation>
}

interface ExchangeCardProps {
  onExchange?: () => void
  data: ExchangeCardData
}

interface ExchangeCardForm {
  coinGet: CoinInputField
  coinPay: CoinInputField
}

export const ExchangeCard: FC<ExchangeCardProps> = ({ data: { coins } }) => {
  const { control, watch, setValue } = useForm<ExchangeCardForm>({
    mode: 'onChange',
    defaultValues: {
      coinGet: { coin: coins[0] },
      coinPay: { coin: coins[1] },
    },
  })

  const { coinGet, coinPay } = watch()

  const swapCoinsHandler = () => {
    const temporaryCoin = coinPay.coin
    setValue('coinPay.coin', coinGet.coin)
    setValue('coinGet.coin', temporaryCoin)
  }

  return (
    <Card>
      <Stack direction="row" justifyContent="space-between">
        <Typography>Exchange</Typography>
        <RefreshButton />
      </Stack>

      <Stack direction="row" justifyContent="space-between">
        <Typography color="#43465C" textTransform="uppercase">
          <Typography component="span" color="white">
            1
          </Typography>
          {coinGet.coin.symbol}
        </Typography>

        <Typography color="#43465C" textTransform="uppercase">
          <Typography component="span" color="white">
            {(coinGet.coin.currentPrice / coinPay.coin.currentPrice).toFixed(5)}
          </Typography>
          {coinPay.coin.symbol}
        </Typography>
      </Stack>

      <Stack alignItems="center" color="#43465C">
        <Grid>
          <Typography>Get</Typography>
          <Controller
            name="coinGet"
            control={control}
            render={({ field }) => (
              <CoinInput
                {...field}
                coins={coins}
                excludesCoins={[coinPay.coin]}
              />
            )}
          />
        </Grid>

        <SwapVertIcon
          sx={{
            cursor: 'pointer',
            marginTop: '24px',
            color: '#fff',
          }}
          onClick={swapCoinsHandler}
        />

        <Grid>
          <Typography component="div">Pay</Typography>
          <Controller
            name="coinPay"
            control={control}
            render={({ field }) => (
              <CoinInput
                {...field}
                coins={coins}
                excludesCoins={[coinGet.coin]}
              />
            )}
          />
        </Grid>

        <Button
          disabled={!coinGet.count || !coinPay.count}
          sx={{
            marginTop: '10px',
          }}
        >
          Exchange
        </Button>
      </Stack>
    </Card>
  )
}
