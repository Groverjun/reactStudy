import React from 'react'
import {renderRoutes} from "../utils/renderRoutes"
import {Layout} from 'antd';
import  NavContend from './components/NavContend';
import  HeadContend from './components/HeadContend';
import { connect } from 'react-redux'
const { Header, Content,Sider } = Layout;


class Layouts extends React.Component {
    render() {
		console.log(this.props)
        return (
            <Layout className="layout">
			<Header>
				<HeadContend/>
			</Header>
			<Layout>
			<Sider style={{ background: '#fff' }}>
				<NavContend {...this.props}/>
			</Sider>
			<Content>
				{renderRoutes(this.props.route.children)}
			</Content>
			</Layout>
		</Layout>
        )
    }
};

export default connect( state => ({state}))(Layouts)
// export default Layouts