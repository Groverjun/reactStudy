import React from 'react';
import { BrowserRouter, } from 'react-router-dom';
import {renderRoutes} from "../utils/renderRoutes"
import { Spin } from 'antd';
//上面三个必不可少的,你可以对照一开始打建的项目路由引入作比较
//这个文件就是路由分离的文件
import {router,routerLogin} from './router'
import { connect } from 'react-redux'
import { addRouter} from '../store/actions/index'
/*
HashRouter
1.用这个了就代表路径加上/#/
2.换成BrowserRouter了；路径就不需要加/#/
3.用HashRouter了就要把path的路径名字带上，如果首次加载默认的话要这样写： 

*/
class BasicRoute extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
        this.state = {
            router:[]
        }
        
        //模拟异步加载路由
        setTimeout(() => {
            this.setState({router:routerLogin})
            //添加路由
            this.props.addRouter(routerLogin) 
            console.log(this.props)
        }, 1000);
       
    }
    render() {
        return (
            this.state.router.length===0?
                <div className ="loading_router">
                    <Spin />
                </div>
            :
                <BrowserRouter >
                    {renderRoutes(this.props.state.user.router)} 
                </BrowserRouter>
        )
    }
};

// export default BasicRoute;
// const BasicRoute = () => (

//     <BrowserRouter >
//         {renderRoutes(router)} 
//     </BrowserRouter>
    
// );
export default connect(
    state => ({state}),
    { addRouter }
  )(BasicRoute)
// export default BasicRoute;