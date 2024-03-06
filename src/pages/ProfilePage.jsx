import Layout from "../components/Layout/Layout.jsx";
import {useLocation} from "react-router-dom";
import useScrollTop from "../hooks/useScrollTop.jsx";

const ProfilePage = () => {
    const { pathname } = useLocation();
    const scrolTop = useScrollTop(pathname);

    return (
        <>
            <Layout>
                <h1>This is Profile Page</h1>
            </Layout>
        </>
    );
};

export default ProfilePage;