import React from 'react'
import {renderRoutes} from "../utils/renderRoutes"
import {Layout} from 'antd';
import  NavContend from './components/NavContend';
import  HeadContend from './components/HeadContend';

const { Header, Content,Sider } = Layout;


class Layouts extends React.Component {
    render() {
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

export default Layouts