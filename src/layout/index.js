import React, { memo} from 'react'
import { renderRoutes ,matchRoutes} from 'react-router-config'
import { Route,Redirect } from 'react-router-dom';
import { Layout} from 'antd';
import  NavContend from './components/NavContend';
import  HeadContend from './components/HeadContend';

const { Header, Content,Sider } = Layout;

export default memo((props)=>{
	console.log(props)
    return (
		<Layout className="layout">
			<Header>
				<HeadContend/>
			</Header>
			<Layout>
			<Sider style={{ background: '#fff' }}>
				<NavContend/>
			</Sider>
			<Content>
			{/* <Route to={props.route.children[0].path} component = {props.route.children[0].component}></Route> */}
				{renderRoutes(props.route.children)}
			</Content>
			</Layout>
		</Layout>
    )
}
)

// export default memo(withRouter(function AllComponent(props) {
//     // console.log(props.route,'props.route',props.location)
//     useEffect(() => {
// 		redirect(props)
//     })
//     return (
// 		<Layout className="layout">
// 			<Header>
// 				<HeadContend/>
// 			</Header>
// 			<Layout>
// 			<Sider style={{ background: '#fff' }}>
// 				<NavContend/>
// 			</Sider>
// 			<Content>
// 				{renderRoutes(props.route.children)}
// 			</Content>
// 			</Layout>
// 		</Layout>
//     )
// }))
// export default NavLayoutsContend;