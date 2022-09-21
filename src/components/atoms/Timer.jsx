import React from 'react';

import { Box } from '@mui/material';
import { connect } from 'react-redux';

const Timer = ({ timer }) => {
  const { hours, minutes, second } = timer;
  return (
    <Box>
      <span>{hours.toString().padStart(2, '0')}</span>:<span>{minutes.toString().padStart(2, '0')}</span>:
      <span>{second.toString().padStart(2, '0')}</span>
    </Box>
  );
};
const mapStateToProps = (state) => ({
  timer: state.timerState.timer,
});
export default connect(mapStateToProps, {})(Timer);
