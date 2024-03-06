import {Table} from "antd";
import ListLoading from "../Loader/ListLoading.jsx";
import {useGetAppointmentsQuery} from "../../redux/features/appointment/appointmentApi.js";
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
      title: "Doctor Name",
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
];

const AppointmentList = () => {
    const {data, isLoading, isError, error} = useGetAppointmentsQuery();
    const appointments = data?.data || [];




    const tableData = [];


    if (!isLoading && !isError && appointments?.length > 0) {
        for (let i = 0; i < appointments.length; i++) {
            tableData.push({
                key: Number(i + 1),
                id: appointments[i]?._id,
                name: appointments[i]?.doctor[0]?.firstName+" "+appointments[i]?.doctor[0]?.lastName,
                date: moment(appointments[i]?.time).format("LLLL"),//local date&time
                status:  appointments[i]?.status
          })

    }
    }




    return (
        <>

            <div>
                <h1 className="text-center text-2xl mb-3">Doctor List</h1>
                {
                    isLoading? (
                        <>
                            <ListLoading/>
                        </>
                    ) : (
                        <div className="w-auto overflow-x-auto">
                            <Table columns={columns} dataSource={tableData}/>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default AppointmentList;