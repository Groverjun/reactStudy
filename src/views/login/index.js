import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {router,routerLogin} from '../../router/router'
import { addRouter} from '../../store/actions/index'
class Login extends React.Component {
    render() {
        return (
            <div>
                 <Link to="/index/home/test">Login</Link>
                 <button onClick ={()=>{
                    this.props.addRouter(router) 
                    this.props.history.push('/index');
                 }}>登录</button>
            </div>
        )
    }
};

export default connect(
    state => ({state}),
    { addRouter }
  )(Login)