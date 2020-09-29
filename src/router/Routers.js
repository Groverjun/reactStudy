import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import {renderRoutes} from "../utils/renderRoutes"
import {routerLogin} from './router'
import { connect } from 'react-redux'
import { addRouter} from '../store/actions/index'
/*
HashRouter
1.用这个了就代表路径加上/#/
2.换成BrowserRouter了；路径就不需要加/#/
3.用HashRouter了就要把path的路径名字带上

*/
class BasicRoute extends React.Component {
    constructor(props){
        super(props)
        if(this.props.state.user.userData.id===undefined&&this.props.state.user.router.length===0){
            this.props.addRouter(routerLogin) ;
        }
    }
    render() {
        return (
                <BrowserRouter >
                    {renderRoutes(this.props.state.user.router,this.props.state.user.userData.id===undefined)} 
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