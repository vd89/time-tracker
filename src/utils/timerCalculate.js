// const { log } = console;
export const timeFormat = (_params) => {
  let timer = {
    sec: 0,
    min: 0,
    hrs: 0,
  };
  if (_params === 0) {
    return timer;
  } else if (_params > 0 && _params < 60) {
    timer.min = _params;
    return timer;
  } else {
    timer.hrs = Math.floor(_params / 60);
    if (_params > timer.hrs * 60) {
      timer.min = _params - timer.hrs * 60;
    }
    return timer;
  }
};
