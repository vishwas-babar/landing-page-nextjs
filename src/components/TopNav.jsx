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
        <Box sx={{ bgcolor: "transparent", width: "100%", height: 70, display: "flex", justifyContent: "center", alignItems: "center" }} >
            <AppBar elevation={0} position="static" sx={{ bgcolor: "transparent", width: "95%", display: "flex", alignItems: 'center', mt: 1, flexDirection: "row" }} >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }} >
                    <Image src={brandLogo} alt="brand logo" width={50} height={50} />
                    <Typography variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, fontWeight: "bold", color: "black" }}
                    >Social</Typography>
                </Box>

                <div className='flex flex-row items-center gap-5' >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                        {menuOptions.map((option, index) => (
                            <Box key={index} sx={{ display: "flex" }} >
                                <Box position={'relative'} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Button href={option.path} sx={{ fontWeight: 530 }} color="primary">
                                        {option.name}
                                    </Button>

                                    <Box position={'absolute'} sx={{ bgcolor: "#2c73e6", mt: 6, height: 8, width: 8, borderRadius: "100%" }} />
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    <div className='flex bg-red-800 p-9'>
                        <Button color="primary" variant="contained" sx={{ ml: 2, fontWeight: 530 }} >Login</Button>
                    </div>
                </div>

            </AppBar >
        </Box >
    );
}