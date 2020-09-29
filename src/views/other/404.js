import React from 'react';
import { Link } from 'react-router-dom'
class F404 extends React.Component {
    render() {
        return (
            <div className="error404">
                <img src={[require("../../assets/images/404.gif")]} alt="" />
                <div>
                    <Link to="/index">返回首页</Link>
                    <Link to="/login">登录</Link>
                </div>
            </div>
        )
    }
};

export default F404;