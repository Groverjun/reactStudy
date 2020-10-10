import React from 'react';
import { Row, Col ,Menu, Dropdown} from 'antd';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	LogoutOutlined,
	BellOutlined
  } from '@ant-design/icons';
import { addRouter,userData} from '@/store/actions/index'
import {routerLogin} from '@/router/router'
class HeadContend extends React.Component {
	render() {
		const handleMenuClick = (e)=> {
			if(e.key==='login'){
				// localStorage.removeItem("router")
				// localStorage.removeItem("userData")
				this.props.addRouter(routerLogin) 
				this.props.userData({}) 
				// window.location.reload()
			}
		}
		const menu = (
			<Menu onClick={handleMenuClick} style={{marginRight:'10px',width:'150px'}}>
			  <Menu.Item key="1" icon={<UserOutlined />}>
				个人信息
			  </Menu.Item>
			  <Menu.Divider />
			  <Menu.Item key="login" icon={<LogoutOutlined />}>
			  {/* <Link to="/login">退出登录</Link> */}
			  退出登录
			  </Menu.Item>
			</Menu>
		  );
		  const msg = (
			<div  style={{marginRight:'10px',background:'#fff'}} className="header_msg">
				<div className="title">消息提醒</div>
				<Menu onClick={handleMenuClick}>
					<Menu.Item key="1">
						<span>内容标内容标题内容标题内容标题内容标题内容标题题</span>
						<span>2019-12-15 14:00:00</span>
					</Menu.Item>
					<Menu.Divider />
					<Menu.Item key="2">
						<span>内容标题</span>
						<span>2019-12-15 14:00:00</span>
					</Menu.Item>
				</Menu>
				<div className="header_msgbottomBar">
					{/* <a href="#">查看更多</a> */}
				</div>
			</div>
		  );
		return (
			<div className="header">
				<Row>
					<Col span={4}>
						{React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							className: 'trigger',
							onClick: this.props.onToggle,
						})}
					</Col>
					<Col span={20} style={{textAlign:'right'}}>
						<Dropdown overlay={msg} placement="bottomCenter" trigger={['click']}>
							<div className="header_icon">
								<BellOutlined />
							</div>
						</Dropdown>
						<span style={{margin:'0 10px'}}></span>
						<Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
							<div className="header_icon">
								<UserOutlined />
								<span style={{marginLeft:'10px'}}>李俊杰</span>
							</div>
						</Dropdown>
					</Col>
				</Row>
				
			</div>
		);
	}
}
export default connect(
    state => ({state}),
    { addRouter,userData}
  )(HeadContend);
