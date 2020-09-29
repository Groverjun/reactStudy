import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './styles/glabal.less'
import Routers from "./router/Routers"
import { Provider } from 'react-redux'
import store from './store/index'
import  "./utils/loadRoutes" //加载本地存储路由
ReactDOM.render(
	<Provider store={store}>
		<Routers/>
	</Provider>,
	document.getElementById('root')
);