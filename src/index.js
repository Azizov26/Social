import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state from './redux/store';


const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <App appStore={state} />
);

