// 客户管理 全部客户切换组件

import React from 'react'
import { Tabs} from 'antd';
import Intention from './Intention'
import Temporary from './Temporary'
import Invalid from './Invalid'
const { TabPane } = Tabs;
class Allclient extends React.Component {
    render() {
        return (
            <div className="card-container" >
				<Tabs defaultActiveKey="1">
					<TabPane tab="意向客户" key="1">
						<Intention></Intention>
					</TabPane>
					<TabPane tab="临时客户" key="2">
						<Temporary></Temporary>
					</TabPane>
					<TabPane tab="失效客户" key="3">
						<Invalid></Invalid>
					</TabPane>
				</Tabs>
			</div>
        )
    }
};

export default Allclient;