import {TimePicker} from "antd";
import {useEffect, useState} from "react";
import moment from "moment";
import {ErrorToast} from "../../helper/ValidationHelper.js";
import {
    useBookAppointmentMutation,
    useCheckBookingAvailabilityMutation
} from "../../redux/features/appointment/appointmentApi.js";
import {useNavigate} from "react-router-dom";


const AppointmentDetails = ({doctor}) => {
    const {_id, firstName, lastName, timings, feesPerConsultation} = doctor || {};
    const {StartTime, EndTime} = timings || {};
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [bookAppointment, {isLoading, isSuccess}] = useBookAppointmentMutation();
    const [checkBookingAvailability, {isLoading:Loading}] = useCheckBookingAvailabilityMutation();
    const navigate = useNavigate()

    useEffect(()=>{
        if(isSuccess){
            navigate('/appointment');
        }
    },[navigate,isSuccess]);
    
    
    const handleBooking = () => {
       if(date==="" || time===""){
           ErrorToast("Date & Time Required")
       }
       else{
           bookAppointment({
               doctorId:_id,
               date:date,
               time:time
           })
       }
    }




    // const handleCheckAvailability = () => {
    //     if(date==="" || time===""){
    //         ErrorToast("Date & Time Required")
    //     }
    //     else{
    //         checkBookingAvailability({
    //             doctorId:_id,
    //             date:date,
    //             time:time
    //         })
    //     }
    // }
    

    return (
        <>
            <div className="shadow-md border rounded-md px-5 pt-2 pb-6">
                <div className="space-y-4">
                    <h4 className="text-2xl">
                        Dr. {firstName} {lastName}
                    </h4>
                    <h4><b>Fees:</b> {feesPerConsultation} taka</h4>
                    <h4>
                        <b>Timings:</b>  {StartTime} - {EndTime}
                    </h4>
                    <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 gap-6">
                        <input
                            onChange={(e) =>{
                                console.log(e.target.value)
                                setDate(e.target.value);
                            }}
                            className="w-full px-4 py-2 rounded-md cursor-pointer focus:outline-none border border-gray-400"
                            type="date"
                        />
                        <TimePicker
                            aria-required={"true"}
                            format="HH:mm"
                            onChange={(value) => {
                                setTime(moment(value['$d']).format("HH:mm"))
                            }}
                            className="w-full px-4 py-2 rounded-md focus:outline-none border border-gray-400"
                        />

                        {/*<button*/}
                        {/*    disabled={Loading}*/}
                        {/*    onClick={handleCheckAvailability}*/}
                        {/*    className="bg-blue-500 hover:bg-blue-700 text-white disabled:cursor-not-allowed py-2 px-4 rounded"*/}
                        {/*>*/}
                        {/*    {Loading ? "Processing..." : " Check Availability"}*/}
                        {/*</button>*/}

                        <button disabled={isLoading} onClick={handleBooking}
                                className="bg-gray-800 hover:bg-gray-900 disabled:cursor-not-allowed text-white py-2 px-4 rounded">
                            {isLoading ? "Processing..." : "Book Now"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppointmentDetails;