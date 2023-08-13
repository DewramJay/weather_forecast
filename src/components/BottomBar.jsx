import React from 'react'

import { AppBar, Avatar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const BottomBar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ backgroundColor:'#198897'}}>
      <Toolbar>
      <Stack direction = {'row'} flexGrow = {1} alignItems="center" justifyContent="flex-start" spacing={5}>
            <Stack spacing={1} direction="row">
             
                
            </Stack>
      </Stack> 
     </Toolbar>
    </AppBar>
  </Box>
  </div>
  )
}
