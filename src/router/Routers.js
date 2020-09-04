import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
//上面三个必不可少的,你可以对照一开始打建的项目路由引入作比较
//这个文件就是路由分离的文件
import {router} from './router'

/*
HashRouter
1.用这个了就代表路径加上/#/
2.换成BrowserRouter了；路径就不需要加/#/
3.用HashRouter了就要把path的路径名字带上，如果首次加载默认的话要这样写： <Route exact path="/"  component={App}/>

*/
console.log(renderRoutes(router))
const BasicRoute = () => (
    <BrowserRouter >
        {renderRoutes(router)} 
    </BrowserRouter>
);
export default BasicRoute;