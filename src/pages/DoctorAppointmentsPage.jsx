import Layout from "../components/Layout/Layout.jsx";
import DoctorAppointments from "../components/DoctorAppointments/DoctorAppointments.jsx";
import {useLocation} from "react-router-dom";
import useScrollTop from "../hooks/useScrollTop.jsx";


const DoctorAppointmentsPage = () => {
    const { pathname } = useLocation();
    const scrolTop = useScrollTop(pathname);

    return (
        <>
            <Layout>
                <DoctorAppointments/>
            </Layout>
        </>
    );
};

export default DoctorAppointmentsPage;