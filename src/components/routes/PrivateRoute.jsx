import {getToken} from "../../helper/SessionHelper.js";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({children}) => {
    if(getToken()){
        return children;
    }else{
        return <Navigate to="/login" />
    }
};

export default PrivateRoute;