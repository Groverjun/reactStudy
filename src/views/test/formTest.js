// import { Form, Input, Button, Checkbox } from 'antd';
// import React from 'react'
// import rules from "@/utils/rules"
// const layout = {
//   labelCol: {
//     span: 4,
//   },
//   wrapperCol: {
//     span: 8,
//   },
// };
// const tailLayout = {
//   wrapperCol: {
//     offset: 4,
//     span: 8,
//   },
// };

// const Demo = () => {
//   const onFinish = (values) => {
//     console.log('Success:', values);
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <Form
//       {...layout}
//       name="basic"
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}
//     >
//       <Form.Item
//         label="Username"
//         name="username"
//         validateTrigger="onBlur"
//         rules={rules.phone}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!',
//           },
//         ]}
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item {...tailLayout} name="remember" valuePropName="checked">
//         <Checkbox>Remember me</Checkbox>
//       </Form.Item>

//       <Form.Item {...tailLayout}>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default Demo