import Layout from "../components/Layout/Layout.jsx";
import DoctorList from "../components/DoctorList/DoctorList.jsx";
import {useLocation} from "react-router-dom";
import useScrollTop from "../hooks/useScrollTop.jsx";

const HomePage = () => {
    const { pathname } = useLocation();
    const scrolTop = useScrollTop(pathname);

    return (
        <>
           <>
               <Layout>
                   <h1 className="text-center text-3xl font-bold font-serif mb-3">Home Page</h1>
                   <DoctorList/>
               </Layout>
           </>
        </>
    );
};

export default HomePage;