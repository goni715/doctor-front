import Layout from "../components/Layout/Layout.jsx";
import ApplyDoctor from "../components/ApplyDoctor.jsx";
import useScrollTop from "../hooks/useScrollTop.jsx";
import {useLocation} from "react-router-dom";

const ApplyDoctorPage = () => {
    const { pathname } = useLocation();
    const scrolTop = useScrollTop(pathname);

    return (
        <>
            <Layout>
                <ApplyDoctor/>
            </Layout>
        </>
    );
};

export default ApplyDoctorPage;