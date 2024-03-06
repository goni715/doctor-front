import Layout from "../components/Layout/Layout.jsx";
import BookAppointment from "../components/BookAppointment/BookAppointment.jsx";
import {useLocation} from "react-router-dom";
import useScrollTop from "../hooks/useScrollTop.jsx";



const BookAppointmentPage = () => {
    const { pathname } = useLocation();
    const scrolTop = useScrollTop(pathname);

    return (
        <>
            <Layout>
                <h1 className="text-center text-2xl md:text-3xl font-bold font-serif mb-5">This is Book Appointment
                    Page</h1>
                <BookAppointment/>
            </Layout>
        </>
    );
};

export default BookAppointmentPage;