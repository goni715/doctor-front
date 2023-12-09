import {getToken} from "../../helper/SessionHelper.js";
import {Navigate} from "react-router-dom";

const PublicRoute = ({children}) => {

    if(getToken() ){
        return (<Navigate to="/" />);
    }else{
        return children;
    }

};

export default PublicRoute;