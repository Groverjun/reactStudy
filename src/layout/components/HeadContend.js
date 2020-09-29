import React from 'react';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
  } from '@ant-design/icons';
class HeadContend extends React.Component {
	render() {
		return (
			<div className="header">
				{React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
					className: 'trigger',
					onClick: this.props.onToggle,
				})}
			</div>
		);
	}
}
export default HeadContend;
