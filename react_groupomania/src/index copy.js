import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import App from './App';

import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import EditPost from './pages/Posts/EditPost';

// Version 18 de react
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
      <App/>
  </StrictMode>
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
