import React from 'react'

import { AppBar, Avatar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const LoginNavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor:'#198897'}}>
          <Toolbar>
          <Stack direction = {'row'} flexGrow = {1} alignItems="center" justifyContent="flex-start" spacing={5}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:"revert-layer" }}>
                WEATHER FORECAST
                </Typography>
                <Stack spacing={1} direction="row">
                 
                    
                </Stack>
          </Stack> 
         </Toolbar>
        </AppBar>
      </Box>
  )
}
