
import store from '../store/index'
import { addRouter,userData} from '../store/actions/index'



let data = sessionStorage.getItem("router");
let user = sessionStorage.getItem("userData");
if(data){
    store.dispatch(addRouter([addRoutes(JSON.parse(data)[0])]))
}
if(user){
    store.dispatch(userData(JSON.parse(user)))
}
function addRoutes(data) {
    if (!data) {
      return;
	}
    data.component = require('@/'+data.url).default;
    data.children && data.children.forEach(element => {
        addRoutes(element);
    });
    return data;
}
export default addRoutes