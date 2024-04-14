import React from 'react'
import { Box, Typography } from '@mui/material'

export default function Hero4() {
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
                    <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }} >Strories</Typography>
                    <div className='h-2 w-16 rounded-md bg-gray-400'></div>
                </Box>
            </Box>
    </>
  )
}

