import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Form,Select } from 'antd';
const EditableContext = React.createContext();
const { Option } = Select;

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
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
			toggleEdit();
			handleSave({ ...record, ...values });
		} catch (errInfo) {
			console.log('Save failed:', errInfo);
		}
	};
	if (editable) {
		// console.log(record)
		childNode = editing ? (
			<Form.Item
				name={dataIndex}
				rules={[
					{
					required: true,
					message: `${title} is required.`,
					},
				]}
				>
				{
					dataIndex==="name"?
					(<Input ref={inputRef} onPressEnter={save} onBlur={save} />):
					(   
						<Select ref={inputRef}   onChange={save} >
							<Option value="jack">Jack</Option>
							<Option value="lucy">Lucy</Option>
							<Option value="Yiminghe">yiminghe</Option>
						</Select>
					)
				}
			</Form.Item>
		) : (
			<div onClick={toggleEdit}>
				{children}
			</div>
		);
	}
  return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component {
  	constructor(props) {
    	super(props);
		this.columns = [
			{
				title: 'name',
				dataIndex: 'name',
				width: '30%',
				editable: true,
			},
			{
				title: 'age',
				dataIndex: 'age',
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
				address: 'London, Park Lane no. 0',
				},
				{
				key: '1',
				name: 'Edward King 1',
				age: '32',
				address: 'London, Park Lane no. 1',
				},
			],
			count: 2,
		};
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
  	onSelectChange = selectedRowKeys => {
    	console.log('selectedRowKeys changed: ', selectedRowKeys);
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