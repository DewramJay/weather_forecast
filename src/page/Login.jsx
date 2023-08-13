import React , { useState, useEffect } from 'react'
import { AppBar, Box, Button, Card, CardActionArea, CssBaseline, Stack, TextField, Toolbar } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LoginNavBar } from '../components/LoginNavBar';

const theme = createTheme();

const Login = () => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    
    if (username === 'user' && password === 'password') {
      window.location.replace("/HomePage");
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <LoginNavBar />
        </AppBar>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          <Toolbar />
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 64px)', marginTop: '-64px' }}>
            <Card sx={{ maxWidth: 400, width: '100%', margin: '0 auto' }}>
              <CardActionArea>
                <Stack sx={{ backgroundColor: '#C5ECF1', p: 3 }} spacing={2}>
                  <TextField 
                  type="User" 
                  label="User" 
                  name="User" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required />
                  <TextField 
                  type="password" 
                  label="Password" 
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
                  required />
                  <Stack spacing={2} direction="row" alignItems="center">
                    <center>
                        <Button type="submit" variant="contained" onClick={handleLogin} sx={{ width: '100%', backgroundColor: '#46B7C7' }}>
                          Login
                        </Button>
                    </center>
                  </Stack>
                </Stack>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
