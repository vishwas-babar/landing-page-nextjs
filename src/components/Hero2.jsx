import { Hidden, Box as MuiBox, Typography } from '@mui/material'
import React from 'react'
import Hero2Img1 from '@/assets/Feature1.png'
import Hero2Img2 from '@/assets/Feature2.png'
import Image from 'next/image'
import BlueDot from './BlueDot'
import { CloudDownload, Group, Pets } from '@mui/icons-material'
import { motion } from 'framer-motion'

export default function Hero2() {

    const Box = motion(MuiBox);

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

    const parentVariants2 = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.1,
                when: "beforeChildren",
                staggerChildren: 0.3,
            }
        },
    };

    const childVariant2 = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };


    return (
        <Box >
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
                    <Typography variant="h4" sx={{ color: "black", fontWeight: "bold" }} >Feature</Typography>
                    <div className='h-2 w-16 rounded-md bg-gray-400'></div>
                </Box>
            </Box>

            {/* first part of feature */}
            <Box sx={{
                display: "flex",
                px: 10,
                pt: 5,
                gap: 5,
            }}
                variants={parentVariant}
                initial="hidden"
                whileInView="visible"
            >
                <motion.div
                    variants={childVariant}
                    className='w-1/2 flex justify-center items-center'>
                    <Image src={Hero2Img1} alt="hero2" width={500} height={400} />
                </motion.div>


                <Box sx={{
                    width: '50%',
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "center",

                }}
                    variants={childVariant}
                >
                    <Typography variant="h5" sx={{ color: "black", fontWeight: "bold" }} ><BlueDot /> Vivamus sit amet interdum</Typography>
                    <Typography variant="h6" sx={{ color: "black" }} >
                        Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis.
                    </Typography>
                </Box>
            </Box>


            {/* second part of feature */}
            <Box sx={{
                display: "flex",
                px: 10,
                pt: 5,
                gap: 5,
            }}
                variants={parentVariant}
                initial="hidden"
                whileInView="visible"
            >

                <Box sx={{
                    width: '50%',
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    justifyContent: "center",

                }}
                    variants={childVariant}
                >
                    <Typography variant="h5" sx={{ color: "black", fontWeight: "bold" }} ><BlueDot /> Vivamus sit amet interdum</Typography>
                    <Typography variant="h6" sx={{ color: "black" }} >
                        Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate sed. Vestibulum sit amet tortor sit amet libero lobortis.
                    </Typography>
                </Box>

                <motion.div
                    variants={childVariant}
                    className='w-1/2 flex justify-center items-center'>
                    <Image src={Hero2Img2} alt="hero2" width={500} height={400} />
                </motion.div>

            </Box>


            {/* third part of feature */}
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                px: 10,
                pt: 5,
                gap: 5,
            }}
                variants={childVariant}
                initial="hidden"
                whileInView="visible"
            >
                <Box sx={{
                    width: 'fit-content',
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    mx: 'auto'

                }}>
                    <Typography variant="h5" sx={{ color: "black", fontWeight: "bold", textAlign: "center" }} >Vivamus sit amet interdum</Typography>
                    <BlueDot />
                </Box>

                <Typography variant="h6" sx={{ color: "black", textAlign: "center" }} >
                    Vestibulum sit amet tortor sit amet libero lobortis semper at et odio.
                </Typography>

                <div className='flex justify-center items-center gap-2 mx-auto'>
                    <Image src={Hero2Img1} alt="hero2" width={500} height={400} />
                </div>
            </Box>


            <Box sx={{
                display: "flex",
                p: 0,
                mt: 15,
                justifyContent: 'center',
                alignItems: "center",
                height: "fit-content",
                width: "100%",
                gap: 2
            }}
                variants={parentVariants2}
                initial="hidden"
                whileInView="visible"
            >
                <Box 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 4,
                }}
                    variants={childVariant2}
                >
                    <Typography color={'primary'} variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }} >
                        +200M
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "white",

                    }}>
                        <CloudDownload color='black' />
                        <Typography variant="h6" sx={{ color: "black", textAlign: "center" }} >
                            Downloads
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    height: 52,
                    width: 2,
                    bgcolor: "#7d7b77",
                }}>

                </Box>

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 4,

                }}
                    variants={childVariant2}
                >
                    <Typography color={'primary'} variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }} >
                        +480M
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "white",

                    }}>
                        <Group color='black' />
                        <Typography variant="h6" sx={{ color: "black", textAlign: "center" }} >
                            Members
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{
                    height: 52,
                    width: 2,
                    bgcolor: "#7d7b77",
                }}>

                </Box>


                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    px: 4,
                }}
                    variants={childVariant2}
                >
                    <Typography color={'primary'} variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }} >
                        +18k
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        bgcolor: "white",

                    }}>
                        <Pets color='black' />
                        <Typography variant="h6" sx={{ color: "black", textAlign: "center" }} >
                            Communities
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
