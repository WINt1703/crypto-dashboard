import type { NextPage } from 'next'
import { NftCard } from 'ui'

const Index: NextPage = () => {
  return (
    <NftCard
      height="241px"
      width="282px"
      price={500}
      nftName="Cool nft"
      nftImg="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
      author="Ala"
      authorImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsI-A1jouXWhTiragizrRkXk7c9VdoFIaWHhngNjA&s"
    />
  )
}

export default Index
