import React from 'react';
import ReactDOM from 'react-dom';
import './styles/antd.css';
import './styles/glabal.less'
import Routers from "./router/Routers"
import { Provider } from 'react-redux'
import store from './store/index'
import  "./utils/loadRoutes" //加载本地存储路由
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn')
ReactDOM.render(
	<Provider store={store}>
		<ConfigProvider locale={zh_CN}> 
			<Routers/>
		</ConfigProvider>
		
	</Provider>,
	document.getElementById('root')
);