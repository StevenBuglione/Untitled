import UserService from "../../services/UserService";
import 'react-infinite-calendar/styles.css';

const RenderOnAuthenticated = ({ children }) => (UserService.isLoggedIn() && addReductionCSS()) ? children : null;

//include css file
function addReductionCSS() {
    var fileName = './css/reduction.css'
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('link');
    style.href = fileName;
    style.type = 'text/css';
    style.rel = 'stylesheet';
    head.append(style);
    return true;
}


export default RenderOnAuthenticated;