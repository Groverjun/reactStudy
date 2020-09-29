import React from 'react'
import {renderRoutes} from "../utils/renderRoutes"
import {Layout} from 'antd';

import  NavContend from './components/NavContend';
import  HeadContend from './components/HeadContend';
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
const { Header, Content,Sider } = Layout;

class Layouts extends React.Component {
	state = {
		collapsed: false,
		current:[window.location.pathname],
		openkeys:[window.location.pathname],
		mode: 'vertical',
		routerlist:[]
		// mode: 'inline'
	};

	handleClick = e => {
		// console.log(e.item.node.innerText)
		this.setState({ current: e.key });
		this.state.routerlist.push(e.key+"_"+e.item.node.innerText)
		this.setState({
			routerlist:[...new Set(this.state.routerlist)]
		})
	};
	toggle = () => {
		this.setState({
		  collapsed: !this.state.collapsed,
		});
	};
	UNSAFE_componentWillMount(){
		//组件挂载之前
		if(window.location.pathname.split("/").length===4){
			this.setState({openkeys:[window.location.pathname.split("/").splice(0,3).join("/")]})
		}
		// console.log(this.props.state)
	}
	componentDidMount(){
		//挂载完成
		this.setState({current:[window.location.pathname]})
	}
    render() {
        return (
            <Layout className="layout">
				<Sider style={{ background: '#001529' }} trigger={null} collapsible {...this.state}>
					<div className="logo"></div>
					<NavContend {...this.props} onHandleClick= {this.handleClick.bind(this)}  {...this.state}/>
				</Sider>
				<Layout>
					<Header>
						<HeadContend  onToggle={this.toggle.bind(this)}/>
						{/* <div className="headTab">
							{this.state.routerlist.map((route, i) => (
								<Link key={i} to={route.split("_")[0]}>{route.split("_")[1]}</Link>
							))}
						</div> */}
					</Header>
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