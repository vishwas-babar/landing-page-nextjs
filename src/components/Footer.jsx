import React from 'react'
import { Box, Link, Typography, Container, Grid, IconButton, Select, InputLabel, MenuItem, FormControl } from '@mui/material'
import Image from 'next/image'
import brandLogo from '@/assets/brand-logo.png'
import { Facebook, Instagram, LinkedIn, Twitter, Public } from '@mui/icons-material'

export default function Footer() {

    const footerItems = {
        column1: [ // company
            {
                name: 'About',
                link: '#',
            },
            {
                name: 'Careers',
                link: '#',
            },
            {
                name: 'Brand Center',
                link: '#',
            },
            {
                name: 'Blog',
                link: '#',
            },
        ],
        column2: [ // services
            {
                name: 'Help Center',
                link: '#',
            },
            {
                name: 'Safety Center',
                link: '#',
            },
            {
                name: 'Community Guidelines',
                link: '#',
            },
            {
                name: 'Trust & Safety',
                link: '#',
            },
        ],
        column3: [ // resources
            {
                name: 'Help Center',
                link: '#',
            },
            {
                name: 'Privacy Policy',
                link: '#',
            },
            {
                name: 'Cookies',
                link: '#',
            },
            {
                name: 'Terms',
                link: '#',
            },
        ],
    }


    const contries = [
        { name: "India", code: "NG" },
        { name: "Ghana", code: "GH" },
        { name: "United States", code: "US" },
        { name: "United Kingdom", code: "UK" },
    ]


    return (

        <Box component="footer" sx={{ bgcolor: 'white', width: "100%" }}>
            <Container maxWidth="100%">
                <Box sx={{
                    p: 2, 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    borderTop: '1px solid #2c73e6',
                    justifyContent: "space-around",
                    bgcolor: 'white',
                    width: "100%",
                    md: { p: 3 },
                }}>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        justifyContent: 'space-around',
                        width: '25%',
                    }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }} >
                            <Image src={brandLogo} alt="brand logo" width={50} height={50} />
                            <Typography variant="h4"
                                component="div"
                                sx={{ flexGrow: 1, fontWeight: "bold", color: "black" }}
                            >Social</Typography>
                        </Box>

                        <Typography color={"black"} variant="subtitle1" gutterBottom component="div" >
                            Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.
                        </Typography>

                        <Typography variant=''>
                            © 2024 Company, Inc. All rights reserved.
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        gap: 5,
                        justifyContent: 'space-around',
                        width: '100%',
                    }}>
                        <Box>
                            <Typography color={"primary"} variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                                Company
                            </Typography>
                            <Box component="ul" sx={{ color: 'gray.500', '& li': { mb: 2 } }}>
                                {footerItems.column1.map((item, index) => (
                                    <li key={index}>

                                        <Link href={item.link} underline="hover" color="black">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </Box>
                        </Box>

                        <Box>
                            <Typography color={"primary"} variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                                SERVICES
                            </Typography>
                            <Box component="ul" sx={{ color: 'gray.500', '& li': { mb: 2 } }}>
                                {footerItems.column2.map((item, index) => (
                                    <li key={index}>

                                        <Link href={item.link} underline="hover" color="black">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </Box>
                        </Box>

                        <Box>
                            <Typography color={"primary"} variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                                RESOURCES
                            </Typography>
                            <Box component="ul" sx={{ color: 'gray.500', '& li': { mb: 2 } }}>
                                {footerItems.column3.map((item, index) => (
                                    <li key={index}>

                                        <Link href={item.link} underline="hover" color="black">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </Box>
                        </Box>
                    </Box>


                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                    }}>
                        <Box sx={{
                            display: 'flex',
                            gap: 2,
                            justifyContent: 'space-around',
                            width: '100%',

                        }}>
                            <IconButton color='primary' sx={{ bgcolor: '#cbd4cd' }}>
                                <Facebook />
                            </IconButton>
                            <IconButton color='primary' sx={{ bgcolor: '#cbd4cd' }}>
                                <LinkedIn />
                            </IconButton>
                            <IconButton color='primary' sx={{ bgcolor: '#cbd4cd' }}>
                                <Twitter />
                            </IconButton>
                            <IconButton color='primary' sx={{ bgcolor: '#cbd4cd' }}>
                                <Instagram />
                            </IconButton>

                        </Box>


                        <Box sx={{
                            width: '100%',
                            border: '1px solid #2c73e6',
                            borderRadius: '5px',
                            display: 'flex',
                            gap: 2,
                            p: 1,
                        }}>
                            <Public sx={{ color: '#2c75e6' }} />
                            <select style={{ color: 'black', border: 'none', width: '100%', border: 'none' }}>
                                {contries.map((country, index) => (
                                    <option key={index} value={country.code}>{country.name}</option>
                                ))}
                            </select>
                        </Box>

                    </Box>

                </Box>
            </Container>
        </Box>

    )
}

