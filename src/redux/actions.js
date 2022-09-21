import { timeFormat } from '../utils/timerCalculate';

import { ADD_TASK, START_TIMER } from './_types';

const { log } = console;
// add the task with timer
export const addTask = (_task) => async (dispatch) => {
  try {
    const res = await timeFormat(parseInt(_task.timer, 10));
    const updatedTask = {
      title: _task.title,
      timer: res,
    };
    dispatch({
      type: ADD_TASK,
      payload: updatedTask,
    });
  } catch (err) {
    log(err.message);
  }
};

export const startTimer = (_key) => async (dispatch) => {
  try {
    log('KEy', _key);
    dispatch({
      type: START_TIMER,
      payload: _key,
    });
  } catch (err) {
    log(err.message);
  }
};
