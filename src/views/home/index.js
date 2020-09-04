import React from 'react'
import { renderRoutes } from 'react-router-config'
class Home extends React.Component {
    constructor(props){
        super()
        this.state ={
            props:props
        }
    }
    
    render() {
        return (
            <div>
                {renderRoutes(this.state.props.route.children)}
            </div>
        )
    }
};

export default Home;