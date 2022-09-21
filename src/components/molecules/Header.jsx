import React from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5' align='center'>
          Timer Tracker App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
