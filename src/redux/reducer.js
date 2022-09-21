import { ADD_TASK, START_TIMER } from './_types';

const INITIAL_STATE = {
  timer: {
    hours: 0,
    minutes: 0,
    second: 0,
  },
  task: {
    title: '',
    timer: 0,
  },
  tasks: [],
};

export default function (state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [payload, ...state.tasks],
      };
    case START_TIMER:
      setTimeout(() => {
        state.tasks[payload].timer.sec - 1;
      }, 1000);
      return {
        ...state,
      };
    default:
      return state;
  }
}
