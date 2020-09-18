import React from 'react'
// import { Route,Redirect} from 'react-router-dom';
import { renderRoutes } from '../../utils/renderRoutes'
class Home extends React.Component {
    render() {
        return (
            <div>
                00
                {renderRoutes(this.props.route.children)}
            </div>
        )
    }
};

export default Home;