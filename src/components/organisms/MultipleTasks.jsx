import React from 'react';

import { Card, CardContent } from '@mui/material';
import { connect } from 'react-redux';

import Task from '../molecules/Task';

const MultipleTasks = ({ tasks }) => {
  return (
    <div>
      {tasks.length > 0
        ? tasks.map((task, key) => (
            <Card>
              <CardContent key={key}>
                <Task _id={key} {...task} />
              </CardContent>
            </Card>
          ))
        : null}
    </div>
  );
};
const mapStateToProps = (state) => ({
  tasks: state.timerState.tasks,
});
export default connect(mapStateToProps, {})(MultipleTasks);
