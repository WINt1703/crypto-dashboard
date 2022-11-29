import { getCoinsMarkets } from 'api'
import type { GetServerSideProps, NextPage } from 'next'
import { ExchangeCard, ExchangeCardData } from 'ui'

interface IndexProps {
  exchangeCard: ExchangeCardData
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async () => {
  return {
    props: {
      exchangeCard: {
        coins: JSON.parse(JSON.stringify(await getCoinsMarkets())),
      },
    },
  }
}

const Index: NextPage<IndexProps> = ({ exchangeCard }) => {
  return <ExchangeCard data={exchangeCard} />
}

export default Index
