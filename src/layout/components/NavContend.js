import React from 'react';
import { Menu} from 'antd';
import { Link } from 'react-router-dom'
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const { SubMenu } = Menu;
class NavContend extends React.Component {
	
	
	
	UNSAFE_componentWillMount(){
		//组件挂载之前
		
	}
	componentDidMount(){
		//挂载完成
		
	}
	update(){
		//组件更新
	}
	menuTag = function deep(menuData) {
		if (menuData && menuData.length > 0) {
			return menuData.map(item => {
				if (item.children && item.children.length > 0) {
					return (<SubMenu key={item.path} icon={<IconFont type={item.icon} />} title={item.title}>
						{deep(item.children)}
					</SubMenu>)
				}
				return (<Menu.Item key={item.path} icon={<IconFont type={item.icon} />}>
					<Link to={item.path}>{item.title}</Link>
				</Menu.Item>)
			})
		}
	}
	render() {
		//挂载中
		
		const { current,openkeys} = this.props;
		return (
			<Menu
				style={{ background: '#1890ff' }}
				onClick={this.props.onHandleClick}
				theme="dark"
				selectedKeys={current}
				mode="inline"
				defaultOpenKeys={openkeys}
				// mode={mode}
			>
				{this.menuTag(this.props.route.children)}
			</Menu>
		);
	}
}
export default NavContend;
