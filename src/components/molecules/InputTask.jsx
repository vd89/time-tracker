import React, { useState } from 'react';

import { Box, Container, Grid } from '@mui/material';
import { connect } from 'react-redux';

import { addTask } from '../../redux/actions';
import InputText from '../atoms/InputText';
import TimerButton from '../atoms/TimerButton';

// const { log } = console;
const InputTask = ({ title, timer, addTask }) => {
  const [formData, setFormData] = useState({
    title: title,
    timer: timer,
  });
  const onChangeHandler = (_prop) => (_e) => {
    setFormData({ ...formData, [_prop]: _e.target.value });
  };
  const onSubmitHandler = (_formData) => (_e) => {
    _e.preventDefault();
    addTask(_formData);
    setFormData({ title, timer });
  };
  return (
    <Container>
      <Grid alignItems={'center'}>
        <Box variant='form'>
          <form action='' onSubmit={onSubmitHandler(formData)}>
            <InputText
              fullWidth={true}
              name='title'
              value={formData.title}
              label='Task to add'
              variant='standard'
              onChange={onChangeHandler('title')}
              id='standard-basic'
            />
            <InputText
              name='timer'
              type='number'
              value={formData.timer}
              variant='standard'
              helperText='Add the time in Minutes'
              onChange={onChangeHandler('timer')}
            />
            <TimerButton
              style={{ margin: '20px 0px 0px 20px' }}
              color='primary'
              type='submit'
              label='Add Task with timer'
            />
          </form>
        </Box>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  title: state.timerState.task.title,
  timer: state.timerState.task.timer,
});
export default connect(mapStateToProps, { addTask })(InputTask);
