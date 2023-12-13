import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Spinner from "./components/Spinner.jsx";
import {useSelector} from "react-redux";
import HomePage from "./pages/HomePage.jsx";
import AppointmentPage from "./pages/AppointmentPage.jsx";
import ApplyDoctorPage from "./pages/ApplyDoctorPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import PublicRoute from "./routes/PublicRoute.jsx";




const App = () => {

    const {loading} = useSelector((state)=>state.auth) || {};


    return (
        <>

            {loading && <Spinner/> }
             <BrowserRouter>
                 <Routes>
                     <Route path="/" element={<PrivateRoute> <HomePage/> </PrivateRoute>} />
                     <Route path="/appointment" element={<PrivateRoute> <AppointmentPage/> </PrivateRoute>} />
                     <Route path="/apply-doctor" element={<PrivateRoute> <ApplyDoctorPage/> </PrivateRoute>} />
                     <Route path="/profile" element={<PrivateRoute> <ProfilePage/> </PrivateRoute>} />


                     <Route path="/register" element={<PublicRoute> <Register/> </PublicRoute>}/>
                     <Route path="/login" element={<PublicRoute> <Login/> </PublicRoute>}/>
                 </Routes>
            </BrowserRouter>



        </>
    );
};

export default App;