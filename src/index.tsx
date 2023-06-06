import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { allReducer } from './reducers';
import './index.css';
import App from './App';

const store = createStore(allReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Provider store={store}><App/></Provider>);
