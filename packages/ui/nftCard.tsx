import { Avatar, Button, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

interface NftCardProps {
    nftImg: string
    price: number
    author: string
    authorImg: string
    nftName: string
    width?: string | number
    height?: string | number
}

export const NftCard: FC<NftCardProps> = ({
    author,
    authorImg,
    nftImg,
    nftName,
    price,
    height,
    width,
}) => {
    return (
        <Stack
            border="1px solid #303241"
            borderRadius={3}
            height={height}
            width={width}
            padding={1}
            spacing="8px"
            direction="column"
        >
            <Grid
                flexGrow={1}
                borderRadius={3}
                overflow="hidden"
                position="relative"
            >
                <Image
                    style={{ objectFit: 'cover' }}
                    fill
                    src={nftImg}
                    alt={nftName}
                />
            </Grid>
            <Stack justifyContent="space-between" height="auto" direction="row">
                <Typography noWrap color="#43465C">
                    {author}
                </Typography>

                <Grid position="relative">
                    <Avatar
                        sx={{
                            bottom: 15,
                            right: 4,
                            position: 'absolute',
                            width: 45,
                            height: 45,
                        }}
                    >
                        <Image fill src={authorImg} alt={author} />
                    </Avatar>
                </Grid>
            </Stack>

            <Typography marginTop="0 !important" variant="h5">
                {nftName}
            </Typography>

            <Stack direction="row" justifyContent="space-between">
                <Typography fontSize="12px">
                    Current Bid <br />
                    {price} ETH
                </Typography>

                <Button>Bidded</Button>
            </Stack>
        </Stack>
    )
}
