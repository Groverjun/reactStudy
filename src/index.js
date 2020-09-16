import React from 'react';
import ReactDOM from 'react-dom';
import './styles/glabal.less'
import 'antd/dist/antd.css';
import Routers from "./router/Routers"
ReactDOM.render(
	<Routers/>,
	document.getElementById('root')
);