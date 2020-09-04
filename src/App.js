import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {router} from "./router/router";
// const router = [
//   {
//     path: "/",
//     exact: true,
//     sidebar: () => <div>home!</div>,
//     main: () => <h2>Home</h2>
//   },
//   {
//     path: "/bubblegum",
//     sidebar: () => <div>bubblegum!</div>,
//     main: () => <h2>Bubblegum</h2>
//   },
//   {
//     path: "/shoelaces",
//     sidebar: () => <div>shoelaces!</div>,
//     main: () => <h2>Shoelaces</h2>
//   }
// ];

export default function SidebarExample() {
const list1 = router.map(function(route, index) {
	
	  if(route.children){
		let listItemst = route.children.map(function(element,j){
			if(element.children){
				let listItemst2 = element.children.map(function(element2,k){
					return (
						<Route
							key={index+"-"+j+"-"+k}
							exact={index===0?true:false}
							path={element2.path}
							component={element2.component}
						/>
					)
				})
				return(
					<Route
						key={index+"-"+j}
						exact={index===0?true:false}
						path={element.path}
						component={element.component}
					>
						{listItemst2}
					</Route>
				)
			}else{
				return(
					<Route
					key={index+"-"+j}
					exact={index===0?true:false}
					path={element.path}
					component={element.component}
				/>
				)
			}
			
		})
		return(
			<Route
				key={index}
				exact={index===0?true:false}
				path={route.path}
				component={route.component}
	 	 	>
			  {listItemst}
		  </Route>
		)
		  
	  }else{
		return (
			<Route
				key={index}
				exact={index===0?true:false}
				path={route.path}
				component={route.component}
			></Route>
		)
	  }
	
  })
  console.log(list1)
  return (
    <Router>
         {list1}
    </Router>
  );
}
