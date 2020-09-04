export function redirect (props) { 
    switch(props.location.pathname){
        case '/':
            props.history.push('/login');
        break;
        case '/home':
            props.history.push('/home/test')
        break;
    default:
        //默认
        break; 
    }
}