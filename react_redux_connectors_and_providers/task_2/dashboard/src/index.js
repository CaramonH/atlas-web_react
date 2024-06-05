import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import App from './App/App';
import uiReducer from './reducers/uiReducer';

// Create the Redux store using configureStore
const store = configureStore({
  reducer: {
    uiReducer: uiReducer
  },
  middleware: [thunk]
});

// Root for the main app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
