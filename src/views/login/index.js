import React from 'react';
import { Row, Col,Form,Input,Button} from 'antd';
import rules from "@/utils/rules"
import { connect } from 'react-redux'
import {router} from '../../router/router'
import { addRouter,userData} from '../../store/actions/index'

class Login extends React.Component {
    // UNSAFE_componentWillMount(){
    //     console.log(this.props.state.user.userData.id)
    //     if(this.props.state.user.userData.id==undefined){
    //        // this.props.addRouter(routerLogin) 
    //     }else{
    //         // this.props.addRouter(routerLogin) 
    //     }
    // }
    state={
        verificationTxt:"发送验证码"
    }
    render() {
        const login =(e)=>{
            console.log(e)
            this.props.addRouter(router) 
            this.props.userData({
                id:1
            }) 
            this.props.history.push('/index');
        }
        const verification =()=>{
            if(this.state.verificationTxt!=='发送验证码'){
                return
            }
            console.log(this.refs['login'].getFieldError('username'))
            if(this.refs['login'].getFieldError('username').length===0&&this.refs['login'].getFieldValue('username')){
                console.log(this.refs['login'].getFieldValue('username'))
                let index= 5;
               
                let time= setInterval(()=>{
                    index--
                    if(index===0){
                        this.setState({verificationTxt:'发送验证码'})
                        clearInterval(time)
                    }else{
                        this.setState({verificationTxt:index+'s'})
                    }
                    
                },1000)
                
            }
            
        }
        return (
            <div className="login">
                <div className="login_logo">
                    <img src={[require("../../assets/images/logo.png")]} alt="" />
                </div>
                <div className="login_main">
                    <Row>
                        <Col span={12}>
                           <div className="login_left">
                                <img src={[require("../../assets/images/login_left.png")]} alt="" width="100%" />
                           </div>
                        </Col>
                        <Col span={12}>
                            <div className="login_right">
                                <div className="login_title">
                                    <div className="h1">
                                        Hi，Welcome
                                    </div>
                                    <div className="h2">
                                        信融销售管理系统
                                    </div>
                                </div>
                                <Form ref='login' name="basic" layout="vertical" onFinish={login} size="large">
                                    <Form.Item validateTrigger="onBlur"  rules={rules.phone} label="请输入手机号" name="username" >
                                        <Input  />
                                    </Form.Item>
                                    <Form.Item validateTrigger="onBlur" rules={rules.empty} label='请输入验证码' name="phone" >
                                        <Input suffix={(<span onClick={verification}>{this.state.verificationTxt}</span>)}/>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button  htmlType="submit"  shape="round" className="login-form-button" type="primary">登  入</Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </div>  
            </div>
        )
    }
};

export default connect(
    state => ({state}),
    { addRouter,userData}
  )(Login)