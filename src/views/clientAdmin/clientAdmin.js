// 客户管理

import React from 'react'
import { connect } from 'react-redux'
import { clientData} from '@/store/actions/index'
import Allclient from './children/clientAdmin/Allclient'
import Details from './children/Details'
class ClientAdmin extends React.Component {
    UNSAFE_componentWillMount(){
		//组件挂载之前
		
    }
    componentWillUnmount(){
        // console.log("组件销毁")
        this.props.clientData({})//清空数据
    }
    render() {
        // console.log(this.props.state.client.clientAdmin)
        if(this.props.state.client.clientAdmin.id===undefined){
            return  <Allclient/>
        }else{
            return  <Details {...this.props.state.client.clientAdmin}/>
        }
            
        
    }
};

export default connect(state => ({state}),{clientData})(ClientAdmin)