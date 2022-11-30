import axios from 'axios'
import { format } from 'date-fns'
import { camelizeKeys } from 'humps'

import { CoinChart, CoinInformation, Currency } from './models'

const CURRENCY: Currency = Currency.Usd

const coinGeckoInstance = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/',
  headers: {
    'Content-Type': 'application/json',
    'Accept-Encoding': 'identity',
  },
})

coinGeckoInstance.interceptors.response.use((response) => {
  if (response.data) response.data = camelizeKeys(response.data)

  return response
})

export async function getCoinsMarkets(): Promise<Array<CoinInformation>> {
  return await coinGeckoInstance
    .get('coins/markets', {
      params: {
        vs_currency: CURRENCY,
        order: 'market_cap_desc',
        per_page: '25',
      },
    })
    .then((response) => response.data as Array<CoinInformation>)
}

export async function getCoinChart(coinId: string): Promise<CoinChart> {
  return await coinGeckoInstance
    .get(`/coins/${coinId}/market_chart`, {
      params: {
        vs_currency: CURRENCY,
        interval: 'interval',
        days: format(new Date(), 'dd-MM-yyyy'),
      },
    })
    .then((response) => response.data as CoinChart)
}
