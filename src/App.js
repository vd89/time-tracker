import { Box, Container } from '@mui/material';
import { Provider } from 'react-redux';

import Layout from './components/layout';
import InputTask from './components/molecules/InputTask';
import MultipleTasks from './components/organisms/MultipleTasks';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Container>
          <InputTask style={{ margin: '10px 0px 0px 0px' }} />
        </Container>
        <Container>
          <Box>
            <MultipleTasks />
          </Box>
        </Container>
      </Layout>
    </Provider>
  );
}

export default App;
