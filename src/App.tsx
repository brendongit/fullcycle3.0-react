
import { Typography } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
import * as React from 'react';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { Routes, Route, Link } from 'react-router-dom'


const Home = () => (
  <Box>
    <Typography>
      Home
    </Typography>
  </Box>
)

const About = () => (
  <Box>
    <Typography>
      About
    </Typography>
  </Box>
)

function App() {
  return (

    <ThemeProvider theme={appTheme} >
      <Box
        component="main"
        sx={{ height: '100vh', background: (theme) => theme.palette.grey[900] }}
      >
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  )
}

export default App;
