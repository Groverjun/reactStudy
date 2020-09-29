import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import { ContentUtils } from 'braft-utils'
import { Upload} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {
	baseURL
  } from '@/api/config'
export default class BasicDemo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState('请输入：'), // 设置编辑器初始内容
    outputHTML: '<p></p>'
  }
  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    })
  }
  render () {
	const props = {
		name: 'file',
		action: baseURL.dev+'/file/saveVideo',
		showUploadList:false,
		multiple:true,
		onSuccess:(info)=>{
			console.log(info,this)
			this.setState({
				editorState: ContentUtils.insertMedias(this.state.editorState, [{
					type: 'IMAGE',
					url: info.data
				}])
			})
		}
	  };
    const { editorState} = this.state
	const controls = [
		'undo', 'redo', 'separator',
		'font-size', 'line-height', 'letter-spacing', 'separator',
		'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
		'superscript', 'subscript', 'remove-styles', 'emoji',  'separator', 'text-indent', 'text-align', 'separator',
		'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
		'link', 'separator', 'hr', 'separator',
		'separator',
		'clear'
	]
	const extendControls = [
		{
		  key: 'antd-uploader',
		  type: 'component',
		  component: (
			<Upload {...props}>
				<button type="button" data-title="上传" className="control-item button">
					<UploadOutlined/>
				</button>
			</Upload>
		  )
		}
	  ]
    return (
      <div className="Richtext">
        <div className="editor-wrapper">
          <BraftEditor
			controls={controls}
			extendControls={extendControls}
            value={editorState}
            onChange={this.handleChange}
          />
        </div>
		<div>
			{this.state.outputHTML}
		</div>
      </div>
    )

  }

}