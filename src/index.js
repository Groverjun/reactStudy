import React from 'react';
import ReactDOM from 'react-dom';
import './styles/glabal.less'
import 'antd/dist/antd.css';
import Routers from "./router/Routers"
import { Provider } from 'react-redux'
import store from './store/index'
import { addRouter} from './store/actions/index'
let data = sessionStorage.getItem("router")
	if(data){
		store.dispatch(addRouter([addLevel(JSON.parse(data)[0])]))
	}
function addLevel(data) {
    if (!data) {
      return;
	}
    data.component = require('@/'+data.url).default;
  
    data.children && data.children.forEach(element => {
      addLevel(element);
    });
  
    return data;
  }
ReactDOM.render(
	<Provider store={store}>
		<Routers/>
	</Provider>,
	document.getElementById('root')
);