import Layout from "../components/Layout/Layout.jsx";
import DocProfile from "../components/Profile/DocProfile.jsx";
import {useLocation} from "react-router-dom";
import useScrollTop from "../hooks/useScrollTop.jsx";


const DocProfilePage = () => {
    const { pathname } = useLocation();
    const scrolTop = useScrollTop(pathname);

    return (
        <>
           <Layout>
               <DocProfile/>
           </Layout>
        </>
    );
};

export default DocProfilePage;