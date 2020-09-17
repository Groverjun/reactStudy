import React from "react";
import { Route,Redirect ,Switch} from 'react-router-dom';
// import { renderRoutes } from 'react-router-config'
class App extends React.Component {
    constructor(props){
		super(props)
		console.log(props)
        this.state ={
            props:props
        }
        
    }
    
    render() {
        const { location,config } = this.props;
        const { pathname } = location;
        console.log(pathname)
        
        return (
            // <Route   to= {this.state.props.route.children[1].path} component = {this.state.props.route.children[1].component}></Route >
            renderRoutes(this.state.props.route.children)
        )
    }
};
const renderRoutes = (routes, extraProps = {}, switchProps = {}) =>
  (routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          exact={route.exact}
          key={route.key || i}
          path={route.path}
          render={props =>
            (route.render ? (
              route.render(props)
            ) : (
              <route.component {...props} {...extraProps} route={route} />
            ))
          }
          strict={route.strict}
        />
      ))}
    </Switch>
  ) : null);

export default App;
