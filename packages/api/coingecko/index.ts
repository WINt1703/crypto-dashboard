import axios from 'axios'
import { camelizeKeys } from 'humps'

import { CoinInformation, Currency } from './models'

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

export async function getCoinsMarkets(
  currency: Currency = Currency.Usd,
): Promise<Array<CoinInformation>> {
  return await coinGeckoInstance
    .get('coins/markets', {
      params: {
        vs_currency: currency,
        order: 'market_cap_desc',
        per_page: '25',
      },
    })
    .then((response) => response.data as Array<CoinInformation>)
}
