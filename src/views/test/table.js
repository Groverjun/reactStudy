import { Table, Tag,Popconfirm,DatePicker, Space} from 'antd';
import {
    FieldTimeOutlined
  } from '@ant-design/icons';
import React from 'react'
const { Column} = Table;

const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    iftime:false,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    iftime:false,
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    iftime:false,
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: false,
    pageSizeOptions:[10,100],
    position:["bottomCenter"],
    showTotal: () => `共10条`,
    // pageSize: this.state.pageSize,
    // current: page.pageNum,
    // total: page.total,
    // onShowSizeChange: (current,pageSize) => this.changePageSize(pageSize,current),
    // onChange: (current) => this.changePage(current),
  };
function onclicks(val){
    console.log(val)
  }
  function onCha(val){
    console.log(val)
  }
function TableDeme(param) { 

    return (
        <Table dataSource={data} pagination={ paginationProps }>
            {/* <ColumnGroup title="Name">
                <Column title="First Name" dataIndex="firstName" key="firstName" />
                <Column title="Last Name" dataIndex="lastName" key="lastName" />
            </ColumnGroup> */}
            <Column title="First Name" dataIndex="firstName" key="firstName" render={
                (text, record)=>(
                    <div className="tableIcon">
                      {
                            record.iftime? <DatePicker  onChange={onCha}/>:<FieldTimeOutlined onClick={onclicks.bind(this, record)}/>
                      }
                    </div>
                )
            }/>
                
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
            <Column title="Age" dataIndex="age" key="age" />
            <Column title="Address" dataIndex="address" key="address" />
            <Column
                title="Tags"
                dataIndex="tags"
                key="tags"
            />
            <Column
                title="Action"
                key="action"
            />
      </Table>

    )
}
 export default TableDeme