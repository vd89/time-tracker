import React, { useState, useEffect } from 'react';

import { Card, CardActions, CardContent, Typography } from '@mui/material';
import { connect } from 'react-redux';

import Timer from '../atoms/Timer';
import TimerButton from '../atoms/TimerButton';

const Task = ({ title, timer }) => {
  const [seconds, setSeconds] = useState(timer.sec);
  const [minutes, setMinutes] = useState(timer.min);
  const [hours, setHours] = useState(timer.hrs);
  const [start, setStart] = useState(false);

  const newTimer = { hours, minutes, seconds };
  useEffect(() => {
    if (start) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      if (minutes === 0 && hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      }
    }
  }, [hours, minutes, seconds, start]);

  const resetHandler = () => {
    setSeconds(timer.sec);
    setHours(timer.hrs);
    setMinutes(timer.min);
    setStart(false);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          {title}
        </Typography>
        <Typography variant='h4' component='div'>
          <Timer timer={newTimer} />
        </Typography>
      </CardContent>
      <CardActions>
        <TimerButton label={'Start'} onClick={() => setStart(true)} />
        <TimerButton color='error' onClick={() => setStart(false)} label={'Stop'} />
        <TimerButton disabled={start} color='secondary' onClick={resetHandler} label={'Reset'} />
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Task);
