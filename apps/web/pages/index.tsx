import { Grid, Stack } from '@mui/material'
import { getCoinChart, getCoinsMarkets } from 'api'
import type { GetServerSideProps, NextPage } from 'next'
import { CryptoCard, CryptoCardProps, ExchangeCard, ExchangeCardData } from 'ui'

interface IndexProps {
  exchangeCard: ExchangeCardData
  cryptoCards: Array<CryptoCardProps>
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  const coins = await getCoinsMarkets()
  const topCoins = coins.slice(0, 4)

  return {
    props: {
      exchangeCard: {
        coins: JSON.parse(JSON.stringify(coins)),
      },
      cryptoCards: JSON.parse(
        JSON.stringify(
          await Promise.all(
            topCoins.map<Promise<CryptoCardProps>>(async (c) => ({
              coin: c,
              coinChart: await getCoinChart(c.id),
            })),
          ),
        ),
      ),
    },
  }
}

const Index: NextPage<IndexProps> = ({ exchangeCard, cryptoCards }) => {
  return (
    <Stack direction="row">
      <Grid width="65px" />
      <Grid flexDirection="row" container padding={1}>
        <Grid width="auto" container spacing={0.75} flexGrow={1} item>
          {cryptoCards.map((c, index) => (
            <Grid width="250px" height="120px" item key={index}>
              <CryptoCard {...c} />
            </Grid>
          ))}
        </Grid>

        <Grid flexGrow={0} item>
          <ExchangeCard data={exchangeCard} />
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Index
