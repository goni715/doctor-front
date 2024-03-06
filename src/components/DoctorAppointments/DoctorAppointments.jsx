import {Table} from "antd";
import ListLoading from "../Loader/ListLoading.jsx";
import {
    useGetDoctorAppointmentsQuery, useUpdateAppointmentStatusMutation
} from "../../redux/features/appointment/appointmentApi.js";
import moment from "moment";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "ID",
        dataIndex: "id",
    },
    {
        title: "Patient Name",
        dataIndex: "name"
    },
    {
        title: "Date & Time",
        dataIndex: "date",
    },
    {
        title: "Status",
        dataIndex: "status",
    },
    {
        title: "Action",
        dataIndex: "action",
    },

];

const DoctorAppointments = () => {
    const {data, isLoading, isError, error} = useGetDoctorAppointmentsQuery();
    const appointments = data?.data || [];
    const [updateAppointmentStatus, {isLoading:Loading}] = useUpdateAppointmentStatusMutation();



    const handleUpdateStatus = (appointmentID, status) => {
        updateAppointmentStatus({
            appointmentId:appointmentID,
            status:status
        })
    }




    const tableData = [];


    if (!isLoading && !isError && appointments?.length > 0) {
        for (let i = 0; i < appointments.length; i++) {
            tableData.push({
                key: Number(i + 1),
                id: appointments[i]?._id,
                name: appointments[i]?.user?.[0]?.name,
                date: moment(appointments[i]?.time).format("LLLL"),//local date&time
                status:  appointments[i]?.status,
                action: (
                    <>
                        <div className="flex gap-4">
                            <button
                                disabled={Loading || appointments[i]?.status==="approved"}
                                onClick={()=>handleUpdateStatus(appointments[i]?._id, "approved")}
                                className="bg-green-500 hover:bg-green-700 disabled:cursor-not-allowed px-2 py-2 text-white font-bold text-md rounded-md">
                                Approve
                            </button>

                            <button
                                disabled={Loading || appointments[i]?.status==="cancelled"}
                                onClick={()=>handleUpdateStatus(appointments[i]?._id, "cancelled")}
                                className="bg-red-500 hover:bg-red-700 px-2 py-2 disabled:cursor-not-allowed text-white font-bold text-md rounded-md">
                               Reject
                            </button>
                        </div>
                    </>
                ),
            })

        }
    }




    return (
        <>

            <div>
                <h1 className="text-center text-2xl mb-3">Appointments</h1>
                {
                    isLoading? (
                        <>
                            <ListLoading/>
                        </>
                    ) : (
                        <div className="w-auto overflow-x-auto shadow">
                            <Table columns={columns} dataSource={tableData}/>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default DoctorAppointments;