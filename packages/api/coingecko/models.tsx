export interface CoinInformation {
  id: string
  symbol: string
  name: string
  image: string
  currentPrice: number
  marketCap: number
  marketCapRank: number
  fullyDilutedValuation: number | null
  totalVolume: number
  high24H: number
  low24H: number
  priceChange24h: number
  priceChangePercentage24h: number
  marketCapChange24h: number
  marketCapChangePercentage24h: number
  circulatingSupply: number
  totalSupply: number | null
  maxSupply: number | null
  ath: number
  athChangePercentage: number
  athDate: Date
  atl: number
  atlChangePercentage: number
  atlDate: Date
  roi: Roi | null
  lastUpdated: Date
}

export interface Roi {
  times: number
  currency: Currency
  percentage: number
}

export enum Currency {
  Btc = 'btc',
  Eth = 'eth',
  Usd = 'usd',
}

export interface CoinChart {
  prices: Array<number[]>
  marketCaps: Array<number[]>
  totalVolumes: Array<number[]>
}
