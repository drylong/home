import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App";
import './index.scss'     //首页样式
import "./assets/styles/css/reset.css";  //样式重置
import "./assets/styles/js/rem";   //rem
// import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(
  <div>
    <App></App>
  </div>,
  document.getElementById('root')
)