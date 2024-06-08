import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import ChattingProvider from './components/chat/ChattingProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ChattingProvider>
      <App />
    </ChattingProvider>
  </Provider>
);