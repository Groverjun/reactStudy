import React from "react";

import {renderRoutes,} from "./utils/renderRoutes"
class App extends React.Component {
	render() {
    	return (
			renderRoutes(this.props.route.children)
        )
    }
};


export default App;
