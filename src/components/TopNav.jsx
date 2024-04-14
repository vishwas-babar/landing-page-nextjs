import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import brandLogo from "../assets/brand-logo.png";
import Image from 'next/image';

export default function TopNav() {


    const menuOptions = [
        { name: "Features", path: "/" },
        { name: "Discover", path: "/" },
        { name: "Stories", path: "/" },
        { name: "Community", path: "/" },
        { name: "Blogs", path: "/" },
    ]

    return (
        <Box sx={{ bgcolor: "transparent", width: "100%", px: 10, height: 70, display: "flex", justifyContent: "space-between", alignItems: "center" }} >
            <AppBar elevation={0} position="static" sx={{ bgcolor: "transparent", width: "95%", display: "flex", alignItems: 'center', justifyContent: "space-between", mt: 1, flexDirection: "row" }} >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }} >
                    <Image src={brandLogo} alt="brand logo" width={50} height={50} />
                    <Typography variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, fontWeight: "bold", color: "black" }}
                    >Social</Typography>
                </Box>

                <div className='flex flex-row items-center gap-16' >
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center', }}>
                        {menuOptions.map((option, index) => (
                            <Box key={index} sx={{ display: "flex" }} >
                                <Box position={'relative'} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Button 
                                    href={option.path} 
                                    sx={{ fontWeight: 530,
                                        fontSize: 16,
                                        borderRadius: "20px",
                                        textTransform: "capitalize",
                                        color: "black",
                                        bgcolor: "transparent",
                                        transition: "all 0.3s ease-in-out",
                                        '&:hover': {
                                            bgcolor: "#2c73e6",
                                            color: "white",
                                            scale: "1.1",
                                            shadow: "0 0 10px 0px #2c73e6",
                                        }
                                    }} color="primary">
                                        {option.name}
                                    </Button>

                                    {/* <Box position={'absolute'} sx={{ bgcolor: "#2c73e6", mt: 6, height: 8, width: 8, borderRadius: "100%" }} /> */}
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    <div className='flex gap-5 items-center'>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "500", color: "black" }}>Login</Typography>
                        <Button variant="contained" sx={{ px: 2, py: 1, borderRadius: "20px"  }} color="primary">SEE DETAIL</Button>

                        <div className='w-[2px] h-8 bg-gray-400'></div>

                        <IconButton sx={{ color: "black" }} >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </div>

            </AppBar >
        </Box >
    );
}