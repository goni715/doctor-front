import {useGetDoctorByIdQuery} from "../../redux/features/doctor/doctorApi.js";
import DoctorLoading from "../Loader/DoctorLoading.jsx";
import AppointmentDetails from "./AppointmentDetails.jsx";
import {useParams} from "react-router-dom";


const BookAppointment = () => {
    const {doctorId} = useParams();
    const {data, isLoading, isError} = useGetDoctorByIdQuery(doctorId);
    const doctor = data?.data || {};


    if (isLoading) {
        return (
            <>
                <DoctorLoading/>
            </>
        )
    }


    if (!isLoading && !isError && doctor?._id) {
        return (
            <>
                <AppointmentDetails doctor={doctor}/>
            </>
        )
    }
};

export default BookAppointment;