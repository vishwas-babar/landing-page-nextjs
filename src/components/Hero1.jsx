import React from 'react'
import Image from 'next/image'
import vector from '@/assets/Vector.png'
import { Box as MuiBox, Button, Typography } from '@mui/material'
import TypeWriter from './TypeWriter'
import { motion } from 'framer-motion'

function Hero1() {

    const Box = motion(MuiBox);

    // Define your animation variants
    const parentVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.3,
            }
        },
    };

    const childVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };


    return (
        <>
            <Box sx={{ display: "flex", p: 2, mt: 15, justifyContent: "space-between", alignItems: "start", height: "fit-content", width: "100%" }} >

                <Box sx={{ display: "flex", width: '600px', flexDirection: "column", gap: 2, justifyContent: "start", alignItems: "start" }} >
                    {/* <Typography variant="h2" sx={{ color: "black", fontWeight: "bold" }} >Connect all over the words</Typography> */}
                    <TypeWriter text={'Connect all over the world '} delaym={150} className={"text-4xl font-bold text-black h-10"} />
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

                <Box
                    position={'absolute'}
                    sx={{ display: "flex", top: 100, right: 0, justifyContent: "center", alignItems: "center" }}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src={vector} alt="vector" width={750} height={400} />
                </Box>
            </Box>


            <Box
                sx={{ width: "70%", mx: "auto", mt: 20, display: 'flex', gap: 2, justifyContent: "center", gap: 6 }}
                variants={parentVariants}
                initial="hidden"
                animate="visible"
            >
                <Box
                    sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}
                    variants={childVariants}
                >
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
                <Box
                    sx={{ display: 'flex', gap: 1, pl: 5, flexDirection: 'column', borderLeft: '2px solid #2c73e6' }}
                    variants={childVariants}
                >
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
                <Box
                    sx={{ display: 'flex', gap: 1, pl: 5, flexDirection: 'column', borderLeft: '2px solid #2c73e6' }}
                    variants={childVariants}
                >
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