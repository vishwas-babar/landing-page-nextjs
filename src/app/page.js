'use client'
import Hero1 from "@/components/Hero1";
import Hero2 from "@/components/Hero2";
import Hero3 from "@/components/Hero3";
import Hero4 from "@/components/Hero4";
import TypeWriter from "@/components/TypeWriter";
import { CssBaseline, Box, Container, Typography, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#47ADFF'
    },
    secondary: {
      main: '#025ff5'
    }
  }
})

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: "white", width: "100%", px: 10,  height: "100%" }} >

        <Hero1 />

        <Hero2 />

        <Hero3 />

        <Hero4 />
      </Box>
    </ThemeProvider>
  );
}
