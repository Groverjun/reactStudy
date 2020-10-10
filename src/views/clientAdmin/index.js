// 客户管理

import React from 'react'
import { renderRoutes } from '../../utils/renderRoutes'
import { Link } from 'react-router-dom'
import {Breadcrumb } from 'antd';
class ClientAdminIndex extends React.Component {
    title(){
        let name = ''
        switch (window.location.pathname) {
            case '/index/clientAdmins/clientAdmin':
                name= '客户管理'
                break;
            case '/index/clientAdmins/signClient':
                name= '签单客户'
                break;
            case '/index/clientAdmins/visit':
                name= '拜访跟进'
                break;
            case '/index/clientAdmins/publicClient':
                name= '公海客户'
                break;
            case '/index/clientAdmins/warning':
                name= '到期预警'
                break;    
            default:
                break;
        }
        return name
    }
    render() {
        return (
            <React.Fragment>
                 <Breadcrumb>
                    <Breadcrumb.Item><Link to='/index/home'>首页</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to='/index/clientAdmins'>客资管理</Link></Breadcrumb.Item>
                    <Breadcrumb.Item>{this.title()}</Breadcrumb.Item>
                </Breadcrumb>
                <br></br>
               { renderRoutes(this.props.route.children)}
            </React.Fragment>
        )
    }
};

export default ClientAdminIndex;