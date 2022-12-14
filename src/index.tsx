import React from 'react';
import ReactDOM from 'react-dom'
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Hello from './components/Hello'
// import ContainerSample from './components/ContainerSample'
// import ContextSample from './components/ContextSample'
// import Parent from './components/Parent'
import UseMemo from './components/UseMemoSample'

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
ReactDOM.render(
  <React.StrictMode>
    <UseMemo />
  </React.StrictMode>,
  document.getElementById('root')
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
