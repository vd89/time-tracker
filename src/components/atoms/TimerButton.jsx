import React from 'react';

import { Button } from '@mui/material';

const TimerButton = (props) => {
  const { label } = props;
  return <Button {...props}>{label}</Button>;
};

export default TimerButton;
