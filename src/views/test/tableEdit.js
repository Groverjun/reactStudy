import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Form,Select,DatePicker } from 'antd';
import moment from 'moment';
const EditableContext = React.createContext();
const { Option } = Select;

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  console.log(form)
  return (
    <Form form={form} component={false}>
	<EditableContext.Provider value={form}>
		<tr {...props} />
	</EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
	title,
	editable,
	children,
	dataIndex,
	formType,
	record,
	handleSave,
	...restProps
}) => {
	let childNode = children;
	const [editing, setEditing] = useState(false);
	const inputRef = useRef();
	const form = useContext(EditableContext);
	useEffect(() => {
		if (editing) {
			inputRef.current.focus();
		}
	}, [editing]);

	const toggleEdit = () => {
		setEditing(!editing);
		form.setFieldsValue({
			[dataIndex]: record[dataIndex],
		});
	};
	const save = async (e) => {
		try {
			const values = await form.validateFields();
			// console.log( values.format("YYYY-MM-DD HH:mm:ss"))
			toggleEdit();
			handleSave({ ...record, ...values });
		} catch (errInfo) {
			console.log('Save failed:', errInfo);
		}
	};
	if (editable) {
		if(editing){
			switch (formType){
				case 'Input':
					childNode = (
						<Form.Item
							name={dataIndex}
							rules={[
								{
									required: true,
									message: `${title} is required.`
								}
							]}
						>
							<Input ref={inputRef} onPressEnter={save} onBlur={save} />
						</Form.Item>
					)
					break;
				case 'Select':
					childNode = (
						<Form.Item
							name={dataIndex}
							rules={[
								{
									required: true,
									message: `${title} is required.`
								}
							]}
						>
							<Select ref={inputRef}   onChange={save} >
								<Option value="jack">Jack</Option>
								<Option value="lucy">Lucy</Option>
								<Option value="Yiminghe">yiminghe</Option>
							</Select>
						</Form.Item>
					)
					break;
				case 'DatePicker':
					childNode = (
						<Form.Item
							name={dataIndex}
							rules={ [{ type: 'object', required: true, message: 'Please select time!' }]}
						>
							<DatePicker ref={inputRef} onChange={save}/>
							
						</Form.Item>
					)
					break;
				default:
					break;
			}
		}else{
			childNode = (
				<div onClick={toggleEdit}>
					1{children}
				</div>
			)
		}
		
	}
    return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component {
  	constructor(props) {
    	super(props);
		this.columns = [
			{
				title: '姓名',
				dataIndex: 'name',
				formType:"Input",
				editable: true,
			},
			{
				title: '年龄',
				dataIndex: 'age',
				formType:"Select",
				// editable: false,
			},
			{
				title: '时间',
				dataIndex: 'time',
				formType:"DatePicker",
				editable: true,
			}
		];
		this.state = {
			selectedRowKeys: [],
			dataSource: [
				{
					key: '0',
					name: 'Edward King 0',
					age: '32',
					time:moment('2020-09-20', 'HH:mm:ss')
				},
				{
					key: '1',
					name: 'Edward King 1',
					age: '32',
					time:moment('2020-09-20', 'HH:mm:ss')
				}
			],
			count: 2,
		};
		console.log(moment('13:30:56', 'HH:mm:ss'))
	}
	handleSave = (row) => {
		console.log(row)
		const newData = [...this.state.dataSource];
		const index = newData.findIndex((item) => row.key === item.key);
		const item = newData[index];
		newData.splice(index, 1, { ...item, ...row });
		this.setState({
			dataSource: newData,
		});
	};
  	onSelectChange = (selectedRowKeys,data) => {
    	console.log('selectedRowKeys changed: ', selectedRowKeys,data);
    	this.setState({ selectedRowKeys });
  	};
	render() {
		const { dataSource,selectedRowKeys } = this.state;
		const components = {
			body: {
				row: EditableRow,
				cell: EditableCell,
			}
		};
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange,
		};
		const columns = this.columns.map((col) => {
		if (!col.editable) {
			return col;
		}

		return {
			...col,
			onCell: (record) =>{
			return {
				record,
				editable: col.editable,
				dataIndex: col.dataIndex,
				title: col.title,
				formType:col.formType,
				handleSave: this.handleSave,
			}
			},
		};
		});
		return (
			<Table
				components={components}
				rowSelection={rowSelection}
				rowClassName={() => 'editable-row'}
				bordered
				dataSource={dataSource}
				columns={columns}
			/>
		);
	}
}


export default EditableTable