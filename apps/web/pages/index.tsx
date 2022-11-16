import type { NextPage } from 'next'
import { CryptoCard } from 'ui'

const Index: NextPage = () => {
    return (
        <>
            <CryptoCard
                cryptoName="Bitcoin"
                diff={2}
                logoSrc="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                timeFrame={new Date('11/10/2022')}
                pricePerOne={555}
                points={[
                    { price: 5000, time: new Date(1999, 10, 1, 12, 45) },
                    { price: 200, time: new Date(1999, 10, 1, 17, 20) },
                    { price: 8000, time: new Date(1999, 10, 1, 13, 55) },
                    { price: 3000, time: new Date(1999, 10, 1, 14, 30) },
                ]}
            />
        </>
    )
}

export default Index
