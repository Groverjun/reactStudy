import React from 'react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {router} from '../../router/router'
import { addRouter,userData} from '../../store/actions/index'
class Login extends React.Component {
    UNSAFE_componentWillMount(){
        if(this.props.state.user.userData.id!==undefined){
            sessionStorage.removeItem("router")
            sessionStorage.removeItem("userData")
            window.location.reload()
        }
    }
    render() {
        return (
            <div>
                 <button onClick ={()=>{
                    this.props.addRouter(router) 
                    this.props.userData({
                        id:1
                    }) 
                    this.props.history.push('/index');
                 }}>登录</button>
            </div>
        )
    }
};

export default connect(
    state => ({state}),
    { addRouter,userData}
  )(Login)