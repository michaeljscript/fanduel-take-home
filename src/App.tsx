import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GamePageConnected } from './pages';
import store from './store';
import theme from './theme';

function App() {
  return <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GamePageConnected />
    </ThemeProvider>
  </Provider>;
}

export default App;
