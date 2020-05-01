import React from 'react';
import { Provider } from 'react-redux';

import Home from './pages/Home/Home';
import configureStore from './store';
import './index.scss';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
