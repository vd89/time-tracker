import React from 'react';

import { Box } from '@mui/material';

const Timer = ({ timer }) => {
  const { hours, minutes, seconds } = timer;
  return (
    <Box>
      <span>{hours.toString().padStart(2, '0')}</span>:<span>{minutes.toString().padStart(2, '0')}</span>:
      <span>{seconds.toString().padStart(2, '0')}</span>
    </Box>
  );
};

export default Timer;
