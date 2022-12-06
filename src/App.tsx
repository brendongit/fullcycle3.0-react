import { Box, ThemeProvider } from '@mui/system';
import * as React from 'react';
import { Header } from './components/Header';

function App() {
  return (

  <ThemeProvider theme={{}} >
    <Box 
    component="main"
    sx={{height: '100vh', background: '#000'}}
    >
      <Header/>
    </Box>
  </ThemeProvider>
  )
}

export default App;
