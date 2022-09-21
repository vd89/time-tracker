import { Provider } from 'react-redux';

import Timer from './components/atoms/Timer';
import TimerButton from './components/atoms/TimerButton';
import Layout from './components/layout';
import InputTask from './components/molecules/InputTask';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <h1>This is the working</h1>
        <TimerButton label='James' color='primary' />
        <Timer />
        <InputTask />
      </Layout>
    </Provider>
  );
}

export default App;
