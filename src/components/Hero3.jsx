import { Box, Typography } from '@mui/material'
import React from 'react'
import discoverImg from '@/assets/discover.png'
import Image from 'next/image'

export default function Hero3() {
    return (
        <>
            <Box sx={{
                display: "flex",
                p: 0,
                mt: 15,
                justifyContent: "space-between",
                alignItems: "start",
                height: "fit-content",
                width: "100%"

            }} >
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "white",
                    gap: 1,
                    mx: 'auto',
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }} >Discover</Typography>
                    <div className='h-2 w-16 rounded-md bg-gray-400'></div>
                </Box>
            </Box>

            <div className='flex items-center justify-center mx-auto mt-8'>
                <Image src={discoverImg} alt="discover" width={"100%"} height={'auto'} />
            </div>
        </>
    )
}
