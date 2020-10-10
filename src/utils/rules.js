// import {channelInfo} from "@/api/index"
//	const reg = /^\s*$/g;
const phone = (rule, value) => {
    const regFormat = /^[1][23456789][0-9]{9}$/ // 正确手机号
    if (!(regFormat.test(value))) {
		return  Promise.reject("请输入正确手机号");
    } else {
		return Promise.resolve();
		// return channelInfo().then(res=>{
		// 	console.log(res)
		// 	return Promise.resolve();
        // })
    }
}
export default {
	phone: [{ required: true, validator: phone}],
	empty: [{ required: true, message: '不能为空'}],
}