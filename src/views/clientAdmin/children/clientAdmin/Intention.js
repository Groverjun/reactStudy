// 客户管理 全部客户 意向客户组件

import React from 'react'
import { connect } from 'react-redux'
import { clientData} from '@/store/actions/index'
class Intention extends React.Component {
    render() {
        return (
            <div>
               <span onClick={()=>{
                   this.props.clientData({
                       id:1
                   })
               }}>
                    意向客户组件
               </span>
            </div>
        )
    }
};

export default connect(state => ({state}),{clientData})(Intention);