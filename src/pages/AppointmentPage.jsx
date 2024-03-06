import Layout from "../components/Layout/Layout.jsx";
import AppointmentList from "../components/AppointmentList/AppointmentList.jsx";
import {useLocation} from "react-router-dom";
import useScrollTop from "../hooks/useScrollTop.jsx";

const AppointmentPage = () => {
    const { pathname } = useLocation();
    const scrolTop = useScrollTop(pathname);

    return (
        <>
            <Layout>
               <AppointmentList/>
            </Layout>
        </>
    );
};

export default AppointmentPage;