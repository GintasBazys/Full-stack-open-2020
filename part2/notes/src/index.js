import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {notes} from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App notes={notes}/>
  </React.StrictMode>,
  document.getElementById('root')
);


