import React from 'react';
import ReactDOM from 'react-dom';
import './styles/glabal.less'
import 'antd/dist/antd.css';
import Routers from "./router/Routers"
import { Provider } from 'react-redux'
import store from './store/index'
ReactDOM.render(
	<Provider store={store}>
		<Routers/>
	</Provider>,
	document.getElementById('root')
);