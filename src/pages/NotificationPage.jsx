import Layout from "../components/Layout/Layout.jsx";
import Notification from "../components/Notification.jsx";
import {useLocation} from "react-router-dom";
import useScrollTop from "../hooks/useScrollTop.jsx";

const NotificationPage = () => {
    const { pathname } = useLocation();
    const scrolTop = useScrollTop(pathname);

    return (
        <>
            <Layout>
                <Notification/>
            </Layout>
        </>
    );
};

export default NotificationPage;