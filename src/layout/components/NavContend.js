import React from 'react';
import { Menu } from 'antd';

import {MailOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom'
import {router} from "../../router/router"
const { SubMenu } = Menu;
class NavContend extends React.Component {
	state = {
		current: window.location.pathname==='/'?"/home/test":window.location.pathname
	};
	handleClick = e => {
		// console.log('click ', e);
		this.setState({ current: e.key });
	};
	render() {
		const { current } = this.state;
		const listItems = router[0].children.map(function(number){
				if(number.children){
					let listItemst = number.children.map(function(element){
						return(<Menu.Item key={element.path}><Link to={element.path}>{element.title}</Link></Menu.Item>)
					})
					return (
						<SubMenu key={number.path} icon={<MailOutlined />} title={number.title}>
							{listItemst}
						</SubMenu>	
					)
				}else{
					return	(
						<Menu.Item key={number.path} icon={<MailOutlined />} >
							<Link to={number.path}>{number.title}</Link>
						</Menu.Item>
					)
					
				}
			});
		
		return (
			<Menu
				onClick={this.handleClick}
				style={{ width: 200 }}
				selectedKeys={[current]}
				mode="inline"
			>
			{listItems}
			</Menu>
		);
	}
}
export default NavContend;
