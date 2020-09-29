import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form,DatePicker } from 'antd';
const originData = [
    {"key":0,"name":"Edrward 0","age":20,isName:true},
    {"key":1,"name":"Edrward 1","age":20,isName:true}
];
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
},form) => {
  const edit = (record,restProps) => {
    console.log(record)
    
    console.log(restProps)
  };

  if(dataIndex==='name'){
    return (
        <td {...restProps}>

            <span onClick={() => edit(record,{...restProps})}>{children}</span>
          {/* {editing ? (
            <Form.Item  name={dataIndex}>
                {inputNode}
            </Form.Item>
          ) : (
             <span onClick={() => edit(record)}>{children}</span>
          )} */}
        </td>
      );   
    }else{
        return  (
            <td {...restProps}>
                {children}
            </td>
        )
    }

};

const EditableTable = () => {

  const [form] = Form.useForm();
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
      editable: true,
    }
  ];
  const mergedColumns = columns.map((col) => {
    return {
      ...col,
      onCell: (record) => ({//表头属性 点击表头所在的行
        record,
        inputType: col.dataIndex === 'age'||col.dataIndex === 'name' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={originData}//数据
        columns={mergedColumns}//表头
        rowClassName="editable-row"
      />
    </Form>
  );
};

export default EditableTable