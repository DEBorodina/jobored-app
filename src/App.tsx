import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import { Router } from './router/Router';
import { setupStore } from './store/store';
import Global from './styles/global';

const store = setupStore();

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Global />
      <Header />
      <Router />
    </BrowserRouter>
  </Provider>
);
