
import store from '../store/index'
import { addRouter,userData,clientData} from '../store/actions/index'



let data = localStorage.getItem("router");
let user = localStorage.getItem("userData");
let clientAdmin = sessionStorage.getItem("clientAdmin");
if(data){
    store.dispatch(addRouter([addRoutes(JSON.parse(data)[0])]))
}
if(user){
    store.dispatch(userData(JSON.parse(user)))
}
if(clientAdmin){
    store.dispatch(clientData(JSON.parse(clientAdmin)))
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