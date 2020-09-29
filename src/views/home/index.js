import React from 'react'
import {channelInfo} from "@/api/index"
import lessModule from '@/styles/home.module.less'
import EditableTable from '@/views/test/tableEdit'
class Home extends React.Component {
    state={
        data:{a:0}
    }
    UNSAFE_componentWillMount(){
		//组件挂载之前
		channelInfo().then(({data})=>{
            this.setState({data:data})
        })
    }
    componentDidMount(){
		//挂载完成
		
	}
    render() {
       
        return (
            <div className={lessModule.home}>
                home
                {JSON.stringify(this.state.data)}
                <EditableTable></EditableTable>
            </div>
        )
    }
};

export default Home;