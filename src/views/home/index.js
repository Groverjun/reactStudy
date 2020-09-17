import React from 'react'
import { Route,Redirect ,Switch} from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
class Home extends React.Component {
    constructor(props){
        super()
        this.state ={
            props:props
        }
        console.log(props)
    }
    
    render() {
        return (
            <div>
                00
                <Redirect to="/home/test"/>
                {renderRoutes(this.state.props.route.children)}
            </div>
        )
    }
};

export default Home;