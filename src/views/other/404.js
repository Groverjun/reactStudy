import React from 'react';
import { Link } from 'react-router-dom'
class F404 extends React.Component {
    render() {
        return (
            <div>
                 <Link to="/index">返回首页</Link>
            </div>
        )
    }
};

export default F404;