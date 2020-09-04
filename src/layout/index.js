import React, { memo} from 'react'
import { renderRoutes } from 'react-router-config'
import { Layout} from 'antd';
import  NavContend from './components/NavContend';
import  HeadContend from './components/HeadContend';

const { Header, Content,Sider } = Layout;

export default memo((props)=>{
	console.log(props.route)
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