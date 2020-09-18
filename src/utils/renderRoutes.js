import React from 'react';

import { Route,Redirect ,Switch} from 'react-router-dom';

import {router} from "../router/router"
let result = []
function routerFind(arr,result) {
  arr.forEach(item => {
	if(item.path === window.location.pathname){
		result.push(item)
	}
    if (item.children) {
		routerFind(item.children,result)
    }
  })
  return result[0]
}

export const renderRoutes = (routes) =>{
	return(routes ? (
		<Switch>
		  {routes.map((route, i) => {
			  	return (
					<Route
						exact={route.exact}
						key={route.key || i}
						path={route.path}
						render={
							props =>{
								if(!routerFind(router,result)){
									return <Redirect to ='/404'></Redirect>
								}else{
									if(!route.render){//没有默认下级
										return <route.component {...props}  route={route}/>
									}else{
										return <React.Fragment>
											<Route exact path={route.path}>
												<Redirect to ={route.render}></Redirect>
											</Route>
											<route.component {...props}  route={route}/>
										</React.Fragment>
									}
								}
								
							
							}
								
						}
						strict={route.strict}
					/>
		  		)
		})}
		</Switch>
	  ) : null);
}