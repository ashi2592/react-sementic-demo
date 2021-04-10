import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configStore from './redux/store';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';


const store = configStore()
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App store={store} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
