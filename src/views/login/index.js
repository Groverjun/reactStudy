import React from 'react';
import { Link } from 'react-router-dom'
class Login extends React.Component {
    render() {
        return (
            <div>
                 <Link to="/home">Login</Link>
            </div>
        )
    }
};

export default Login;