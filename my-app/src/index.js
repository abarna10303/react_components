import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Classcomponent from './ClassComponents/Classcomponent';
import Lifecycle from './LifeCycle/lifecycle';
import Flifecycle from './Function/flifecycle';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <Classcomponent />
  <Lifecycle />
  <Flifecycle />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
