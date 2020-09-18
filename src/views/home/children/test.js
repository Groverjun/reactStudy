import React from 'react';
import { Link } from 'react-router-dom'
class Test extends React.Component {
    render() {
        return (
            <div>
                <Link to="/login">00000</Link>
                <button onClick={()=>{
                    console.log(0)
                    this.props.history.push('/login');
                }}>跳转</button>
            </div>
        )
    }
};

export default Test;