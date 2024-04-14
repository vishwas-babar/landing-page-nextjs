import React from 'react'
import { Button, Box as MuiBox, Typography as MuiTypography } from '@mui/material'
import workingman from '@/assets/workingman.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import BulletPoint from './BulletPoint'
import { Apple } from '@mui/icons-material'


export default function Hero4() {


    const Box = motion(MuiBox);
    const Typography = motion(MuiTypography);

    const parentVariant = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.3,
            }
        }
    }

    const childVariant = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
        }
    }

    const pointsVariant = {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.3,
            }
        }
    }


    return (
        <>
            <Box
                variants={parentVariant}
                initial="hidden"
                whileInView="visible"
                sx={{ mt: 15 }}
            >
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "#1976d2", textAlign: 'center' }} >Publish your own custom fields</Typography>

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: '40%',
                    mx: 'auto',

                }}
                >
                    <Typography variant="subtitle1" sx={{ color: "#1976d2", textAlign: 'center', mt: 2, textWrap: 'wrap' }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                </Box>

                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    gap: 2,
                    mt: 1
                }}
                    variants={parentVariant}
                >

                    <Box sx={{
                        width: '50%',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                    }}
                        variants={childVariant}
                    >
                        <Image src={workingman} alt="working" width={600} height={'auto'} />
                    </Box>
                    <Box
                        sx={{
                            mt: 10,
                        }}
                        variants={childVariant}
                    >
                        {/* #1976d2 */}
                        <Typography variant="subtitle1" sx={{ color: "black", width: '350px', textAlign: 'start', mt: 5, fontSize: '16px' }} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>

                        <Typography variant="h5" sx={{ color: "black", width: '350px', fontWeight: 'semiBold', textAlign: 'start', mt: 2 }} >
                            Perfect for:
                        </Typography>

                        <Box
                            sx={{ display: "flex", flexDirection: "column", gap: 0, mt: 1 }}
                        >
                            <BulletPoint point={"this is the bullet point"} />
                            <BulletPoint point={"this is the bullet point"} />
                            <BulletPoint point={"this is the bullet point"} />
                            <BulletPoint point={"this is the bullet point"} />

                        </Box>
                    </Box>
                </Box>
            </Box>


            <Box>
                <Typography variant="h3" sx={{ fontWeight: "bold", color: "#2b2b2a", textAlign: 'center', mt: 10 }} >
                    What are you waiting for? Download Now!
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 5,
                        gap: 5,
                        mb: 10,
                    }}
                >


                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 3,
                        width: 192,
                        height: 56,
                        bgcolor: 'black',
                        color: 'white',
                        borderRadius: '5px',
                        transition: 'all 0.3s ease-in-out',
                        cursor: 'pointer',
                        ':hover': {
                            bgcolor: 'white',
                            color: 'black',
                            border: '1px solid black',
                        },
                    }}>
                        <Box sx={{ mr: 3 }}>
                            <svg viewBox="0 0 384 512" width={30}>
                                <path
                                    fill="currentColor"
                                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                                />
                            </svg>
                        </Box>
                        <Box>
                            <Typography variant="caption" display="block">Download on the</Typography>
                            <Typography variant="h5" fontWeight="bold" fontFamily="sans-serif" mt={-1}>App Store</Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 3,
                        width: 192,
                        height: 56,
                        bgcolor: 'black',
                        color: 'white',
                        borderRadius: '5px',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease-in-out',
                        cursor: 'pointer',
                        ':hover': {
                            bgcolor: 'white',
                            color: 'black',
                            border: '1px solid black',
                        },
                    }}>
                        <Box sx={{ mr: 3 }}>
                            <svg viewBox="30 336.7 120.9 129.2" width={30}>
                                <path
                                    fill="#FFD400"
                                    d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                                />
                                <path
                                    fill="#FF3333"
                                    d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                                />
                                <path
                                    fill="#48FF48"
                                    d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                                />
                                <path
                                    fill="#3BCCFF"
                                    d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                                />
                            </svg>
                        </Box>
                        <Box>
                            <Typography variant="caption" display="block">Download on the</Typography>
                            <Typography variant="h5" fontWeight="bold" fontFamily="sans-serif" mt={-1}>Play Store</Typography>
                        </Box>
                    </Box>

                </Box>
            </Box>

        </>
    )
}

