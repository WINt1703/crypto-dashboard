import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import { Grid, Icon, Stack, Tooltip, Typography } from '@mui/material'
import { CoinChart, CoinInformation } from 'apis/coingecko/models'
import Image from 'next/image'
import { FC } from 'react'
import { Area, AreaChart, ResponsiveContainer, YAxis } from 'recharts'

export interface CryptoCardProps {
  coin: CoinInformation
  coinChart: CoinChart
}

export const CryptoCard: FC<CryptoCardProps> = ({ coin, coinChart }) => {
  const colorDiff = coin.priceChangePercentage24h > 0 ? '#22D49F' : '#FF5B6D'
  const strokeArea = coin.priceChangePercentage24h > 0 ? '#4AC49E' : '#FF5668'
  const fillArea = coin.priceChangePercentage24h > 0 ? '#40a484' : '#d34553'

  return (
    <Grid
      position="relative"
      border="1px solid #303241"
      padding={1}
      borderRadius={3}
    >
      <Stack alignItems="center" spacing={0.5} direction="row">
        <Image width={25} height={25} src={coin.image} alt={coin.symbol} />

        <Typography>
          {coin.name} ({24}h)
        </Typography>

        <Tooltip title={`$${coin.priceChange24h}`}>
          <Stack
            alignItems="center"
            paddingBottom={2}
            color={colorDiff}
            direction="row"
          >
            <Icon
              sx={{
                rotate: '45deg',
              }}
            >
              {coin.priceChangePercentage24h > 0 ? (
                <ArrowDropUpIcon fontSize="small" />
              ) : (
                <ArrowRightIcon fontSize="small" />
              )}
            </Icon>
            <Typography fontSize={10}>
              {coin.priceChangePercentage24h} %
            </Typography>
          </Stack>
        </Tooltip>
      </Stack>

      <Typography fontSize="24px" fontWeight={600}>
        <Typography component="span" color="#303241">
          $
        </Typography>
        {coin.currentPrice}
      </Typography>

      <Grid
        overflow="hidden"
        borderRadius="25px"
        left={-4}
        right={-4}
        top={0}
        bottom={-5}
        zIndex={-1}
        position="absolute"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={coinChart.prices}>
            <Area
              opacity={0.3}
              fill={fillArea}
              stroke={strokeArea}
              dataKey="1"
            />
            <YAxis hide dataKey="1" />
          </AreaChart>
        </ResponsiveContainer>
      </Grid>
    </Grid>
  )
}
