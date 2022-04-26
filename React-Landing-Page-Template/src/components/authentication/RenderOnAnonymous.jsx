import UserService from "../../services/UserService";

const RenderOnAnonymous = ({ children }) => (!UserService.isLoggedIn() && addBootstrap() && addBootstrapMin()) ? children : null;


//include css file
function addBootstrap() {
    var fileName = './css/bootstrap.css'
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('link');
    style.href = fileName;
    style.type = 'text/css';
    style.rel = 'stylesheet';
    head.append(style);
    return true;
}


//include css file
function addBootstrapMin() {
    var fileName = './css/bootstrap.min.css'
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('link');
    style.href = fileName;
    style.type = 'text/css';
    style.rel = 'stylesheet';
    head.append(style);
    return true;
}

export default RenderOnAnonymous 