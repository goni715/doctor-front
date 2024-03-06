import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import HomePage from "./pages/HomePage.jsx";
import AppointmentPage from "./pages/AppointmentPage.jsx";
import ApplyDoctorPage from "./pages/ApplyDoctorPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import PublicRoute from "./routes/PublicRoute.jsx";
import NotificationPage from "./pages/NotificationPage.jsx";
import DocProfilePage from "./pages/DocProfilePage.jsx";
import BookAppointmentPage from "./pages/BookAppointmentPage.jsx";
import DoctorAppointmentsPage from "./pages/DoctorAppointmentsPage.jsx";





const App = () => {


    return (
        <>
             <BrowserRouter>
                 <Routes>
                     <Route path="/" element={<PrivateRoute> <HomePage/> </PrivateRoute>} />
                     <Route path="/appointments" element={<PrivateRoute> <AppointmentPage/> </PrivateRoute>} />
                     <Route path="/doctor/appointments" element={<PrivateRoute> <DoctorAppointmentsPage/> </PrivateRoute>} />
                     <Route path="/apply-doctor" element={<PrivateRoute> <ApplyDoctorPage/> </PrivateRoute>} />
                     <Route path="/profile" element={<PrivateRoute> <ProfilePage/> </PrivateRoute>} />
                     <Route path="/doc-profile" element={<PrivateRoute> <DocProfilePage/> </PrivateRoute>} />
                     <Route path="/doc/book-appointment/:doctorId" element={<PrivateRoute> <BookAppointmentPage/> </PrivateRoute>} />
                     <Route path="/notification" element={<PrivateRoute> <NotificationPage/> </PrivateRoute>} />
                     <Route path="/register" element={<PublicRoute> <Register/> </PublicRoute>}/>
                     <Route path="/login" element={<PublicRoute> <Login/> </PublicRoute>}/>
                 </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;