import { ADD_TASK } from './_types';

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
        tasks: state.tasks.concat(payload),
      };
    default:
      return state;
  }
}
