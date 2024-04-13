import React from 'react'
import Image from 'next/image'
import vector from '@/assets/Vector.png'
import { Box, Button, Typography } from '@mui/material'

function Hero1() {
    return (
        <>
            <Box sx={{ display: "flex", p: 2, mt: 15, justifyContent: "space-between", alignItems: "start", height: "fit-content", width: "100%" }} >

                <Box sx={{ display: "flex", width: '600px', flexDirection: "column", gap: 2, justifyContent: "start", alignItems: "start" }} >
                    <Typography variant="h2" sx={{ color: "black", fontWeight: "bold" }} >Connect all over the words</Typography>
                    <Typography variant="h5" sx={{ color: "black" }} >Connect with friends and the world around you on Social.</Typography>

                    <Box sx={{ display: "flex", gap: 2, mt: 2 }} >
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                            <Button
                                sx={{
                                    fontWeight: 530,
                                    fontSize: 16,
                                    borderRadius: "5px",
                                    textTransform: "capitalize",
                                    color: "black",
                                    bgcolor: "#2c73e6",
                                    scale: "1.1",
                                    color: "white",
                                    transition: "all 0.3s ease-in-out",
                                    '&:hover': {
                                        boxShadow: "0 0 10px 0px #2c73e6",
                                        color: "gray",
                                    }
                                }} color="primary">
                                Get Started
                            </Button>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                            <Button
                                sx={{
                                    fontWeight: 530,
                                    fontSize: 16,
                                    borderRadius: "5px",
                                    textTransform: "capitalize",
                                    scale: "1.1",
                                    color: "white",
                                    bgcolor: "#2c73e6",
                                    transition: "all 0.3s ease-in-out",
                                    '&:hover': {
                                        boxShadow: "0 0 10px 0px #2c73e6",
                                        color: "gray",

                                    }
                                }} color="primary">
                                Learn More
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <Box position={'absolute'} sx={{ display: "flex", top: 100, right: 0, justifyContent: "center", alignItems: "center" }} >
                    <Image src={vector} alt="vector" width={750} height={400} />
                </Box>
            </Box>


            <Box sx={{ width: "70%", mx: "auto", mt: 10, display: 'flex', gap: 2, justifyContent: "center", gap: 6}}>
                <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }} >
                    <Typography sx={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "1.4rem"
                    }} variant="h2" color="black">Bussiness Solutions</Typography>
                    <Typography sx={{
                        color: "black",
                        fontSize: "1rem"
                    }} variant="h5" color="black">Connect with friends...</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, pl: 5, flexDirection: 'column', borderLeft: '2px solid #2c73e6' }} >
                    <Typography sx={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "1.4rem"
                        
                    }} variant="h2" color="black">Bussiness Solutions</Typography>
                    <Typography sx={{
                        color: "black",
                        fontSize: "1rem"
                    }} variant="h5" color="black">Connect with friends...</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, pl: 5, flexDirection: 'column', borderLeft: '2px solid #2c73e6' }} >
                    <Typography sx={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "1.4rem"
                    }} variant="h2" color="black">Bussiness Solutions</Typography>
                    <Typography sx={{
                        color: "black",
                        fontSize: "1rem"
                    }} variant="h5" color="black">Connect with friends...</Typography>
                </Box>
            </Box>
        </>
    )
}

export default Hero1