import { ArrowDropUp, ArrowRight } from '@mui/icons-material'
import { Grid, Icon, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

interface ChartPoint {
    time: Date
    price: number
}

export interface CryptoCardProps {
    logoSrc: string
    cryptoName: string
    pricePerOne: number
    timeFrame: Date
    diff: number
    points: Array<ChartPoint>
}

export const CryptoCard: FC<CryptoCardProps> = ({
    cryptoName,
    logoSrc,
    pricePerOne,
    timeFrame,
    diff,
    points,
}) => {
    const colorDiff = diff > 0 ? '#22D49F' : '#FF5B6D'
    const strokeArea = diff > 0 ? '#4AC49E' : '#FF5668'
    const fillArea = diff > 0 ? '#40a484' : '#d34553'

    return (
        <Grid
            position="relative"
            border="1px solid #303241"
            padding={1}
            borderRadius={3}
        >
            <Stack alignItems="center" spacing={0.5} direction="row">
                <Typography>
                    {cryptoName} ({timeFrame.getHours()}h)
                </Typography>

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
                        {diff > 0 ? (
                            <ArrowDropUp fontSize="small" />
                        ) : (
                            <ArrowRight fontSize="small" />
                        )}
                    </Icon>

                    <Typography fontSize={10}>{diff} %</Typography>
                </Stack>
            </Stack>

            <Typography fontSize="24px" fontWeight={600}>
                <Typography component="span" color="#303241">
                    $
                </Typography>
                {pricePerOne}
            </Typography>

            <Grid
                overflow="hidden"
                borderRadius="25px"
                left={-5}
                right={-5}
                top={0}
                bottom={-5}
                position="absolute"
            >
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={points}>
                        <Area
                            opacity={0.75}
                            fill={fillArea}
                            stroke={strokeArea}
                            dataKey="price"
                        />
                        <XAxis hide dataKey="time" />
                        <YAxis hide dataKey="price" />
                    </AreaChart>
                </ResponsiveContainer>
            </Grid>
        </Grid>
    )
}
